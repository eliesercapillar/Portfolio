<template>
    <div>
        <section>
            <form action="https://formspree.io/f/mnnjynnq" method="POST" @submit="handleSubmit">
                <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <!-- Name -->
                    <div class="h-16">
                        <input
                        v-model="form.name"
                        type="text"
                        name="name"
                        placeholder="Name"
                        autocomplete="given-name"
                        class="input"
                        required
                        />
                    </div>

                    <!-- Email -->
                    <div class="h-16">
                        <input
                        v-model="form.email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        autocomplete="email"
                        class="input"
                        required
                        />
                    </div>

                    <!-- Message -->
                    <div class="h-32 sm:col-span-2">
                        <textarea
                        v-model="form.message"
                        name="message"
                        rows="4"
                        placeholder="Leave feedback or just say hello!"
                        class="resize-none input"
                        required
                        ></textarea>
                    </div>
                </div>
                <div class="mt-2">
                    <button type="submit" :disabled="isSubmitting" class="w-full disabled:opacity-50 btn">
                        <span v-if="isSubmitting" class="flex items-center">
                        Sending...
                        <Icon icon="radix-icons:reload" class="ml-2 animate-spin" />
                        </span>
                        <span v-else class="flex items-center">
                        Send Message
                        <Icon icon="radix-icons:paper-plane" class="ml-2" />
                        </span>
                    </button>
                    <p class="mt-4 text-xs text-muted-foreground">
                        By submitting this form, I agree to the
                        <a href="/privacy" class="link font-semibold">privacy&nbsp;policy.</a>
                    </p>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';

// Form data
const form = ref({
  name: "",
  email: "",
  message: "",
});

// Loading state
const isSubmitting = ref(false);

const handleSubmit = () => {
  isSubmitting.value = true;

  // Simulate a delay for UX (Formspree handles the real submission)
  setTimeout(() => {
    isSubmitting.value = false;
  }, 2000);
};
</script>
