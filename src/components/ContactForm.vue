<template>
    <div class="mx-auto max-w-3xl w-full mb-10">
        <div><Toaster/></div>
        <section class="mt-8 flex flex-col w-full">
            <h2 class="text-3xl mb-4 font-medium">Contact Me</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
                <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    <!-- Name -->
                    <div class="h-16">
                        <Input
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
                        <Input
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
                        <Textarea
                        v-model="form.message"
                        name="message"
                        rows="4"
                        placeholder="Feel free to contact me about career opportunities, collaboration, feedback, or just to say hi!"
                        class="resize-none input"
                        required
                        />
                    </div>
                </div>
                <div class="mt-2">
                    <Button type="submit" :disabled="isSubmitting" class="w-full disabled:opacity-50 btn">
                        <span v-if="isSubmitting" class="flex items-center">
                            Sending...
                            <Icon icon="radix-icons:reload" class="ml-2 animate-spin" />
                        </span>
                        <span v-else class="flex items-center">
                            Send Message
                            <Icon icon="radix-icons:paper-plane" class="ml-2" />
                        </span>
                    </Button>
                </div>
            </form>
        </section>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import Input from "@/components/ui/input/Input.vue";
import Textarea from "@/components/ui/textarea/Textarea.vue";
import Button from "@/components/ui/button/Button.vue";
import Toaster from '@/components/ui/toast/Toaster.vue'
import { useToast } from '@/components/ui/toast/use-toast'

const { toast } = useToast();

// Form state
const form = ref({
  name: "",
  email: "",
  message: "",
});

// UI states
const isSubmitting = ref(false);

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const response = await fetch("https://formspree.io/f/mnnjynnq", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(form.value),
    });

    if (!response.ok)
    {
        form.value = { name: "", email: "", message: "" };
        
        const data = await response.json();
        throw new Error(data.error);
    }

    toast({
        title: "Message Sent!",
        description: "Thanks for reaching out! I'll get back to you as soon as I can.",
    });
    form.value = { name: "", email: "", message: "" };
  } 
  catch (error) 
  {
    toast({
        title: "Oh no! Something went wrong.",
        description: error.message || "Something went wrong. Please try again later.",
        variant: "destructive",
    });
  } 
  finally 
  {
    isSubmitting.value = false;
  }
};
</script>
