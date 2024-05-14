<template>
    <div class="radio-component">
      <!-- Channel Selector with Circular Buttons -->
      <div class="channel-selector">
        <button
          v-for="channel in channels"
          :key="channel.id"
          @click="selectChannel(channel)"
          :class="{ 'selected': selectedChannel && selectedChannel.id === channel.id }"
          class="channel-button"
        >
          <img :src="getChannelImage(channel.id)" class="channel-image" />
        </button>
      </div>
  
      <!-- Play/Pause Button -->
      <button @click="togglePlayPause" class="play-pause-button">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
  
      <!-- Vinyl Record -->
      <div class="vinyl-container">
        <svg viewBox="0 0 100 100" class="vinyl">
          <circle cx="50" cy="50" r="45" fill="#2A2F34" stroke="#FF6B34" stroke-width="3" />
          <circle cx="50" cy="50" r="10" fill="#FF6B34" />
        </svg>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        channels: [
          { id: 1, name: 'Channel 1', url: 'https://streaming.shoutcast.com/crooze-mp3' },
          { id: 2, name: 'Channel 2', url: 'https://streaming.shoutcast.com/easy-crooze-aac' },
          { id: 3, name: 'Channel 3', url: 'https://streaming.shoutcast.com/chillout-crooze-aac' },
          { id: 4, name: 'Channel 4', url: 'https://streaming.shoutcast.com/dinner-crooze-aac' },
          { id: 5, name: 'Channel 5', url: 'https://streaming.shoutcast.com/lounge-crooze-aac' },
          { id: 6, name: 'Channel 6', url: 'https://streaming.shoutcast.com/smoothjazz-crooze-aac' },
          { id: 7, name: 'Channel 7', url: 'https://streaming.shoutcast.com/xmas-crooze-aac' },
        ],
        selectedChannel: null,
        isPlaying: false,
      };
    },
    methods: {
      selectChannel(channel) {
        this.selectedChannel = channel;
        if (this.isPlaying) {
          this.$refs.audio.play();
        }
      },
      togglePlayPause() {
        if (this.isPlaying) {
          this.$refs.audio.pause();
        } else {
          this.$refs.audio.play();
        }
        this.isPlaying = !this.isPlaying;
      },
      getChannelImage(channelId) {
        const images = {
          1: 'https://example.com/image1.png',
          2: 'https://example.com/image2.png',
          3: 'https://example.com/image3.png',
          4: 'https://example.com/image4.png',
          5: 'https://example.com/image5.png',
          6: 'https://example.com/image6.png',
          7: 'https://example.com/image7.png',
        };
        return images[channelId];
      },
    },
  };
  </script>
  
  <style scoped>
  .radio-component {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #2A2F34;
    color: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
  }
  
  .channel-selector {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 10px;
  }
  
  .channel-button {
    padding: 10px;
    border: none;
    border-radius: 50%;
    background-color: #2A2F34;
    overflow: hidden;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .channel-image {
    max-width: 100%;
    max-height: 100%;
  }
  
  .selected {
    background-color: #FF6B34;
  }
  
  .play-pause-button {
    padding: 10px;
    background-color: #2A2F34;
    color: white;
    border-radius: 10px;
    transition: background-color 0.3s;
  }
  
  .play-pause-button:hover {
    background-color: #FF6B34;
  }
  
  .vinyl-container {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
  
  .vinyl {
    width: 80px;
    height: 80px;
    margin-top: -40px; /* To show half the vinyl */
  }
  </style>
  