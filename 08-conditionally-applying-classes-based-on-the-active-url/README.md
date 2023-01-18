# Conditionally Applying Classes Based on the Active URL

Tailwind has no built-in APIs for conditionally applying styles. Instead, it encourages you to embrace whatever framework you're already using to conditionally add or remove utilities for different states of your application.

We can do this in our Next.js application by creating a second URL and page, and refactoring our server navigation to persist across every page of our app. Now we can use the useRouter hook from Next.js to determine which URL is active and use that to apply different styles to our navigation links.

