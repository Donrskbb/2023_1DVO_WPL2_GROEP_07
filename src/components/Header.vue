<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import Menubar from 'primevue/menubar';
import OverlayPanel from 'primevue/overlaypanel';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import Badge from 'primevue/badge';

const toast = useToast();
const op = ref();
const loading = ref(false);
const buttonDisabled = ref(false);

const items = ref([
    {
        label: 'Home',
        // icon: 'pi pi-home',
        to: '/'
    },
    {
        label: 'Community',
        // icon: 'pi pi-star',
        to: '/about'
    },
    {
        label: 'Settings',
        // icon: 'pi pi-cog',
        items: [
            {
                label: 'Language',
                icon: 'pi pi-globe',
                items: [
                {
                    label: 'Nederlands',
                    command: () => {
                    // Code to change language to Dutch
                    }
                },
                {
                    label: 'English',
                    command: () => {
                    // Code to change language to English
                    }
                },
                {
                    label: 'France',
                    command: () => {
                    // Code to change language to France
                    }
                }
                ]
            },
        ]
    },
    {
        label: 'Radio',
        // icon: 'pi pi-envelope',
        badge: 'LIVE',
        to: '',
        command: () => openNewWindow('https://example.com', { width: 300, height: 500, features: 'resizable=no,scrollbars=yes' })
    }
]);
const loadAndShowSuccess = async () => {
    try {
        if (!buttonDisabled.value) { 
            const loadedSuccessfully = await load();
            if (loadedSuccessfully) {
                showSuccess();
                toggle();
                disableButtonForDuration(5 * 60 * 1000);
            } else {
                console.error('Loading failed');
            }
        } else {
            console.log('Button is disabled');
        }
    } catch (error) {
        console.error('An error occurred while loading:', error);
    }
};
const load = () => {
    return new Promise((resolve, reject) => {
        loading.value = true;
        setTimeout(() => {
            loading.value = false;
            resolve(true);
        }, 2000);
    });
};
const showSuccess = () => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: 'Bericht succesvol verzonden', life: 3000 });
};
const disableButtonForDuration = (duration) => {
    buttonDisabled.value = true;
    setTimeout(() => {
        buttonDisabled.value = false;
    }, duration);
};
const toggle = (event) => {
    op.value.toggle(event);
}
const openNewWindow = (url = '', options = {}) => {
  const {
    width = 800,
    height = 600,
    left = (window.screen.width - width) / 2,
    top = (window.screen.height - height) / 2,
    features = ''
  } = options;

  const windowFeatures = `width=${width},height=${height},left=${left},top=${top},${features}`;

  window.open(url, '_blank', windowFeatures);
};

</script>

<template>
    <div class="card">
        <Menubar :model="items">
            <template #start>
                <div>
                    <a href="/" rel="noopener noreferrer" class="logo">                                  </a>
                </div>
            </template>
            <template #item="{ item, props, hasSubmenu, root }">
                <RouterLink v-if="item.to" :to="item.to" v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="[item.icon, 'headerIcon']"></span>
                    <span class="ml-2 headerLabel">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" severity="danger"/>
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </RouterLink>
                <a v-else v-ripple class="flex align-items-center" v-bind="props.action">
                    <span :class="[item.icon, 'headerIcon']"></span>
                    <span class="ml-2 headerLabel">{{ item.label }}</span>
                    <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" severity="danger"/>
                    <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{ item.shortcut }}</span>
                    <i v-if="hasSubmenu" :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
            </template>
            <template #end>
                <Toast /> 
                <div class="card flex justify-content-center">
                    <Button type="button" label="App de Studio" @click="toggle" />
                    <OverlayPanel ref="op">
                        <div class="flex flex-column gap-3 w-25rem">
                            <form @submit.prevent="submitForm">
                                <FloatLabel class="m-10">
                                    <InputText id="username" v-model="username" aria-describedby="username-help"/>
                                    <label for="username">Naam</label>
                                </FloatLabel>
                                <FloatLabel class="m-25">
                                    <InputText id="message" class="message-input" v-model="message" />
                                    <label for="message">Bericht</label>
                                </FloatLabel>
                                <div class="card flex justify-content-center m-10">
                                    <Button 
                                        type="submit" 
                                        label="Verzenden" 
                                        icon="pi pi-check" 
                                        severity="info"
                                        :loading="loading"
                                        :disabled="buttonDisabled"
                                        @click="loadAndShowSuccess" />
                                </div>
                            </form>
                        </div>
                    </OverlayPanel>
                </div>
            </template>
        </Menubar>
    </div>
</template>

<style>
.logo {
    background-color: orange;
    -webkit-mask: url(/src/assets/images/LogoSizes/FinalLogo.svg) no-repeat center;
    mask: url(/src/assets/images/LogoSizes/FinalLogo.svg) no-repeat center;
}
.message-input {
    height: 100px;
}
.m-25 {margin-top: 25px}
.m-10 {margin-top: 10px}

.headerIcon {
    margin-right: 8px;
}
.headerLabel {
    font-size: 16px;
    font-weight: bold;
    position: relative;
    margin-right: 8px;
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
</style>