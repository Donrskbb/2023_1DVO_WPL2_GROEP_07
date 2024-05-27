<script setup>
// PrimeVue Imports
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useToast } from 'primevue/usetoast';
import Menubar from 'primevue/menubar';
import OverlayPanel from 'primevue/overlaypanel';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Badge from 'primevue/badge';

// Component State
const toast = useToast();
const op = ref(null);
const loading = ref(false);
const buttonDisabled = ref(false);
const isCheckboxChecked = ref(false);
const screenWidth = ref(window.innerWidth);

// Update screen width on resize
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

// Add event listener for window resize
onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

// Remove event listener on component unmount
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth);
});

// Menu Items
const items = computed(() => {
  const commonItems = [
    {
      label: 'Live Chat',
      command: () => openNewWindow('/chat', { width: 300, height: 500, features: 'resizable=no,scrollbars=yes' })
    },
    {
      label: 'Agenda',
      to: '#agenda'
    },
    {
      label: 'Settings',
      items: [
        {
          label: 'Language',
          icon: 'pi pi-globe',
          items: [
            {
              label: 'Nederlands',
              command: () => {
              }
            },
            {
              label: 'English',
              command: () => {
              }
            },
            {
              label: 'France',
              command: () => {
              }
            }
          ]
        },
      ]
    },
    {
      label: 'Zenders',
      badge: 'LIVE',
      to: '',
      command: () => openNewWindow('/radio', { width: 500, height: 1000, features: 'resizable=no,scrollbars=yes' })
    },
    {
      label: 'Podcast',
      to: '#podcast'
    }
  ];

  if (screenWidth.value < 960) {
    commonItems.push({
      label: 'Stuur een bericht',
      command: (event) => toggle(event)
    });
  }

  return commonItems;
});

// Functions
const loadAndShowSuccess = async () => {
  if (buttonDisabled.value) {
    console.log("Button is disabled");
    return;
  }
  try {
    loading.value = true;
    const loadedSuccessfully = await new Promise((resolve) => {
      setTimeout(() => {
        loading.value = false;
        resolve(true);
      }, 2000);
    });
    if (loadedSuccessfully) {
      showSuccess();
      toggle();
      disableButtonForDuration(5 * 60 * 1000);
    } else {
      console.error("Loading failed");
    }
  } catch (error) {
    console.error("An error occurred while loading:", error);
  }
};

const showSuccess = () => {
  toast.add({
    severity: 'success',
    summary: 'Success Message',
    detail: 'Bericht succesvol verzonden',
    life: 3000,
  });
};

const disableButtonForDuration = (duration) => {
  buttonDisabled.value = true;
  setTimeout(() => {
    buttonDisabled.value = false;
  }, duration);
};

const toggle = (event) => {
  op.value.toggle(event);
};

const openNewWindow = (url = '', options = {}) => {
  const {
    width = 800,
    height = 600,
    left = (window.screen.width - width) / 2,
    top = (window.screen.height - height) / 2,
  } = options;
  const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;
  window.open(url, '_blank', windowFeatures);
};
</script>

<template>
    <div class="main-container">
        <Menubar :model="items" class="menubar mw">
            <template #start>
                <a href="/" rel="noopener noreferrer">
                    <img src="../assets/images/LogoCrooze250.png" alt="Crooze Logo" class="logo">
                </a>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <RouterLink v-if="item.to" :to="item.to" v-ripple class="flex align-items-center" v-bind="props.action">
                    <span class="ml-2 headerLabel">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" severity="danger"/>
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </RouterLink>
                <a v-else v-ripple class="flex align-items-center" v-bind="props.action">
                    <span class="ml-2 headerLabel">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" severity="danger"/>
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <Toast />
                <div class="card flex justify-content-center">
                    <Button type="button" label="Stuur een bericht" @click="toggle" class="btn headerLabel"/>
                    <OverlayPanel ref="op" class="overlay">
                        <div class="flex flex-column gap-3 w-25rem">
                            <form @submit.prevent="submitForm" class="overlayForm">
                                <div class="FloatLabel">
                                    <FloatLabel>
                                        <InputText class="InputText" id="username" v-model="username" aria-describedby="username-help"/>
                                        <label class="InputTextLabel" for="username">Naam</label>
                                    </FloatLabel>
                                </div>
                                <div class="FloatLabel">
                                    <FloatLabel>
                                        <InputText class="InputText" id="email" v-model="email" />
                                        <label class="InputTextLabel" for="email">E-mailadress*</label>
                                    </FloatLabel>
                                </div>
                                <div class="FloatLabel">
                                    <FloatLabel>
                                        <InputText class="InputText" id="phone" v-model="phone" />
                                        <label class="InputTextLabel" for="message">Telefoonnummer*</label>
                                    </FloatLabel>
                                </div>
                                <div class="FloatLabel">
                                    <FloatLabel>
                                        <InputText class="InputTextLarge" id="message" v-model="message" />
                                        <label class="InputTextLabel" for="message">Vul hier je bericht in</label>
                                    </FloatLabel>
                                </div>
                                <div class="flex">
                                    <Button class="btn overlay-btn" type="button" label="audio" icon="pi pi-plus" severity="info" />
                                    <Button class="btn overlay-btn" type="button" label="afbeelding" icon="pi pi-plus" severity="info" />
                                </div>
                                <div class="voorwaarden">
                                    <input type="checkbox" id="voorwaarden" name="voorwaarden" value="voorwaarden" v-model="isCheckboxChecked">
                                    <label for="voorwaarden" class="voorwaardenText">Ik accepteer de <a href="/privacy" class="voorwaardenA">voorwaarden</a></label>
                                </div>
                                <div>
                                    <Button
                                        class="submit"
                                        type="submit"
                                        label="Versturen"
                                        icon="pi pi-check"
                                        severity="info"
                                        :loading="loading"
                                        :disabled="!isCheckboxChecked || buttonDisabled"
                                        @click="loadAndShowSuccess" />
                                </div>
                            </form>
                        </div>
                    </OverlayPanel>
                </div>
            </template>
        </Menubar>
        <div>
            <p class="menu-message">Change the screen size smaller or bigger to let the menu bar work.</p>
        </div>
        <div class="radio-container">
            <div class="radio-logo">
                <img src="../assets/images/album_cover.jpg" alt="logo">
            </div>
            <div class="radio-text">
                <h3 class="crooze-h3">Nu op Crooze</h3>
                <h2 class="crooze-h2">Test The Sound - Mr Scruff</h2>
                <button class="crooze-btn">
                    <div class="btn-logo">
                        <img src="../assets/images/Expand.png" alt="speler uitklappen">
                    </div>
                    <div class="btn-text">
                        <p>Speler uitklappen</p>
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<style>
.radio-container {
    display: flex;
    height: 274px;
    overflow: hidden;
    padding: 0 138px;
    background: #FF6B34;
    align-items: center;
}
.radio-logo img {
    width: 200px;
    margin-left: 138px;
}
.radio-text {
    display: flex;
    flex-direction: column;
    padding: 40px;
}
.crooze-h3 {
    color: #202427;
    font-family: s_medium;
    font-size: 40px;
    font-weight: 500;
    margin: 8px 0;
}
.crooze-h2 {
    color: #FFF;
    font-family: Unbounded;
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    margin: 8px 0;
}
.crooze-btn {
    display: flex;
    width: 250px;
    align-items: center;
    border-radius: 6px;
    background: #D35121;
    border: 0;
    margin: 8px 0;
    cursor: pointer;
}
.btn-logo {
    padding: 6px;
}
.btn-logo img {
    width: 40px;
    height: 40px;
}
.btn-text p {
    color: #FFF;
    font-family: s_medium;
    font-size: 20px;
    font-weight: 500;
}
.logo {
    width: 252px;
    height: auto;
}
.btn {
    display: flex;
    padding: 8px 15px;
    justify-content: center;
    align-items: center;
    gap: 14px;
    border-radius: 6px;
    background-color: #FF6B34;
    border-color: #FF6B34;
    color: #FFF;
    z-index: 999;
}
.headerLabel {
    position: relative;
    color: #FFF;
    text-align: center;
    font-family: s_regular;
    font-size: 20px;
    font-weight: 500;
}
.headerLabel::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: currentColor;
    transition: width 0.3s ease;
}
.headerLabel:hover::before {
    width: 100%;
}
.menubar {
    display: flex;
    width: 100%;
    height: 150px;
    padding: 20px 57px;
    background-color: #202427;
    justify-content: center;
    align-items: center;
    gap: 143px;
    border-radius: 0;
    border: 0;
}
.overlay {
    width: 100%;
    max-width: 528px;
    height: auto;
    max-height: 683px;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: -8px 8px 0px 0px rgba(0, 0, 0, 0.10);
    background: #2A2F34;
}
.overlayForm {
    width: 100%;
    max-width: 559px;
    height: auto;
    max-height: 776px;
    flex-shrink: 0;
}
.InputTextLabel {
    width: 100%;
    color: #A7A7A7;
    font-family: s_regular;
    font-size: 14px;
    font-weight: 400;
}
.InputText {
    width: 100%;
    max-width: 473px;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #D9D9D9;
    background: #FFF;
    color: #202427;

}
.InputTextLarge {
    width: 100%;
    max-width: 473px;
    height: 149.563px;
    background: #FFF;
    stroke-width: 1px;
    stroke: #D9D9D9;
    color: #202427;
}
input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    outline: 1px solid #FF6B34;
    accent-color: #FF6B34;
}
.FloatLabel {
    margin-top: 34px;
}
.overlay-btn {
    margin: 15px 15px 15px 0;
}
.voorwaarden {
    display: flex;
    margin: 20px 10px 40px 0;
}
.voorwaardenText {
    font-family: s_regular;
    font-weight: 500;
    text-align: center;
    padding-top: 5px;
    margin: 0 0 0 5px;
}
.voorwaardenA {
    color: #FF6B34;
}
.submit {
    display: flex;
    width: 100%;
    max-width: 473px;
    padding: 8px 15px;
    border-radius: 6px;
    background: #FF6B34;
    justify-content: center;
    align-items: center;
}
.main-container {
    background-color: #202427;
}
.mw {
    max-width: 100%;
    margin: 0 auto;
}

@media screen and (max-width: 960px) {
    .menubar {
        flex-direction: column;
        padding: 10px;
        gap: 20px;
    }
    .radio-container {
        flex-direction: column;
        height: auto;
        padding: 20px;
    }
    .radio-logo img {
        margin-left: 0;
    }
    .radio-text {
        align-items: center;
        text-align: center;
    }
    .card {
        display: none;
    }
}
@media screen and (max-width: 1070px) {
    .radio-container {
        padding: 0 120px;
    }
    .crooze-btn {
        width: 190px;
        height: 30px;
    }
    .btn-logo {
        padding: 6px;
    }
    .btn-logo img {
        width: 20px;
        height: 20px;
    }
    .btn-text p {
        font-size: 15px;
    }
}
@media screen and (min-width: 960px) and (max-width: 1070px) {
    .menu-message {
        display: block;
        text-align: center;
        font-size: 18px;
        color: #FF6B34;
        padding: 20px;
    }
    .menubar {
        display: none;
    }
    .crooze-h2 {
        font-size: 20px;
    }
}
@media screen and (max-width: 960px), screen and (min-width: 1070px) {
    .menu-message {
        display: none;
    }
}
@media screen and (min-width: 1070px) and (max-width: 1250px) {
    .crooze-h2 {
        font-size: 25px;
    }
}
</style>