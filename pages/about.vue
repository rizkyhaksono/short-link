<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/toast/use-toast'
import Typography from '~/components/ui/typography/Typography.vue'

const { toast } = useToast()

const features = [
  {
    title: 'Quick Shortening',
    description: 'Convert long URLs into short, manageable links in seconds',
    icon: '⚡'
  },
  {
    title: 'Secure & Reliable',
    description: 'All shortened URLs are secure and permanently valid',
    icon: '🔒'
  },
  {
    title: 'Analytics',
    description: 'Track your link performance with detailed click statistics',
    icon: '📊'
  },
  {
    title: 'Custom URLs',
    description: 'Create branded short links with custom aliases',
    icon: '✨'
  }
]

const stats = [
  { number: '10M+', label: 'Links Shortened' },
  { number: '5M+', label: 'Monthly Clicks' },
  { number: '100K+', label: 'Happy Users' }
]
</script>

<template>
  <LayoutsBaseLayout>
    <!-- Hero Section with Gradient Background -->
    <div class="pt-20">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16 animate-fade-in">
          <Typography variant="h1" class="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Simplify Your Links with
            <span class="text-blue-600 dark:text-blue-400">ShortLink</span>
          </Typography>
          <Typography variant="p" class="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            Transform long URLs into concise, shareable links that make your digital presence more effective.
            Join millions of users who trust ShortLink.
          </Typography>
        </div>

        <!-- Stats Section -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div v-for="stat in stats" :key="stat.label"
            class="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow dark:shadow-slate-700">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{{ stat.number }}</div>
            <div class="text-gray-600 dark:text-gray-300">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-4xl mx-auto px-4 pb-16">
      <!-- Features Grid -->
      <div class="mb-16">
        <Typography variant="h3" class="text-3xl font-semibold text-center mb-12">
          Powerful Features for Your Links
        </Typography>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="feature in features" :key="feature.title" class="group p-8 transition-all duration-300
                      hover:shadow-lg dark:hover:shadow-slate-700 transform hover:-translate-y-1">
            <div class="text-4xl mb-4">{{ feature.icon }}</div>
            <Typography variant="h4"
              class="text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
              {{ feature.title }}
            </Typography>
            <Typography variant="p" class="text-gray-600 dark:text-gray-300">
              {{ feature.description }}
            </Typography>
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="rounded-2xl p-8 mb-16">
        <Typography variant="h3" class="text-2xl font-semibold mb-6 dark:text-white">
          Why Choose ShortLink?
        </Typography>
        <Typography variant="p" class="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          ShortLink is more than just a URL shortener. We provide a comprehensive suite of tools
          to help you manage and track your links effectively. Whether you're a social media
          manager, digital marketer, or content creator, our platform is designed to meet your needs.
        </Typography>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 
                  dark:to-blue-900 rounded-2xl p-12 text-white">
        <Typography variant="h3" class="text-2xl font-semibold mb-4">
          Ready to Start Shortening?
        </Typography>
        <Typography variant="p" class="mb-8 opacity-90">
          Join thousands of satisfied users and start creating powerful short links today.
        </Typography>
        <div class="space-x-4">
          <Button variant="default" @click="() => {
            toast({
              title: 'Welcome Aboard! 🚀',
              description: 'Let\'s create your first shortened link together.',
            });
          }">Get Started for Free</Button>
          <Button variant="outline" class="text-black dark:text-white">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </LayoutsBaseLayout>
</template>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Dark mode scrollbar */
@media (prefers-color-scheme: dark) {
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #1e293b;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #475569;
    border-radius: 6px;
    border: 3px solid #1e293b;
  }
}
</style>