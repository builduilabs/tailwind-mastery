import { format } from "date-fns";
import faker from "faker";

faker.seed(123);

export const data = [
  {
    id: 1,
    label: "Tailwind CSS",
    img: "tailwind.png",
    categories: [
      {
        id: 1,
        label: "",
        channels: [
          {
            id: 1,
            label: "welcome",
            description:
              "Introduction to the Tailwind CSS framework and community.",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: 2,
            label: "announcements",
            icon: "Speakerphone",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 2,
        label: "Tailwind CSS",
        channels: [
          {
            id: 3,
            label: "general",
            description:
              "General discussion of Tailwind CSS (please move off-topic discussion in the off-topic channels).",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 4,
            label: "plugins",
            description: "Tailwind CSS plugins.",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 5,
            label: "help",
            description:
              "Help with Tailwind CSS and build process integration.",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 6,
            label: "internals",
            description: "Development of the Tailwind CSS framework itself.",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 3,
        label: "Tailwind Labs",
        channels: [
          {
            id: 7,
            label: "tailwind-ui",
            description: "General discussion of Tailwind UI.",
            messages: getMessages(),
          },
          {
            id: 8,
            label: "headless-ui",
            description: "General discussion of Headless UI.",
            messages: getMessages(),
          },
          {
            id: 9,
            label: "refactoring-ui",
            description: "General discussion of Refactoring UI.",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 10,
            label: "heroicons",
            description: "General discussion of Heroicons.",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: 4,
        label: "Off topic",
        channels: [
          {
            id: 11,
            label: "design",
            description: "General discussion of web design.",
            messages: getMessages(),
          },
          {
            id: 12,
            label: "development",
            description: "General discussion of web development.",
            messages: getMessages(),
          },
          {
            id: 13,
            label: "random",
            description: "General discussion of everything else!",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
      {
        id: 5,
        label: "Community",
        channels: [
          {
            id: 14,
            label: "jobs",
            description:
              "Job board. Please put [HIRING] or [FOR HIRE] at the beginning of your post.",
            messages: getMessages(),
          },
          {
            id: 15,
            label: "showcase",
            description: "Share your projects built with Tailwind CSS!",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 16,
            label: "bots",
            description: "Bot spam containment.",
            messages: getMessages(),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Next.js",
    img: "next.png",
    categories: [
      {
        id: 6,
        label: "",
        channels: [
          {
            id: 17,
            label: "welcome",
            icon: "Book",
            messages: getMessages(),
          },
          {
            id: 18,
            label: "announcements",
            icon: "Speakerphone",
            description:
              "Announcements related to this Discord server and Next.js",
            messages: getMessages(),
          },
          {
            id: 19,
            label: "introductions",
            unread: true,
            description:
              "Welcome to the server! Feel free to introduce yourself",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 7,
        label: "Need-Help",
        channels: [
          {
            id: 20,
            label: "community-help",
            description:
              "Members of the community can help each other here, but we recommend checking GitHub discussions first: ",
            messages: getMessages(),
          },
        ],
      },
      {
        id: 8,
        label: "Community",
        channels: [
          {
            id: 21,
            label: "general",
            icon: "HashtagWithSpeechBubble",
            description: "Discussions about Next.js in general",
            messages: getMessages(),
          },
          {
            id: 22,
            label: "off-topic",
            unread: true,
            description:
              "Discussions about topics not related to Next.js or other channels",
            messages: getMessages(),
          },
          {
            id: 23,
            label: "showcase",
            unread: true,
            messages: getMessages(),
          },
          {
            id: 24,
            label: "jobs-board",
            description:
              "Is your company looking for Next.js developers? Discuss here!",
            messages: getMessages(),
          },
          {
            id: 25,
            label: "hire-me",
            unread: true,
            description: "Are you a developer looking to work with Next.js?",
            messages: getMessages(),
          },
          {
            id: 26,
            label: "makers",
            description:
              "Share as you build in public. Welcoming all makers and indie hackers.",
            messages: getMessages(),
          },
          {
            id: 27,
            label: "moderation-feedback",
            description:
              "Discussion about this Discord server and moderation topics",
            messages: getMessages(),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Mirage JS",
    img: "mirage.png",
    categories: [
      {
        id: 9,
        label: "Text Channels",
        channels: [
          { id: 28, label: "general", messages: getMessages() },
          { id: 29, label: "graphql", unread: true, messages: getMessages() },
          {
            id: 30,
            label: "typescript",
            unread: true,
            messages: getMessages(),
          },
        ],
      },
    ],
  },
];

function getMessages() {
  return [...Array(faker.datatype.number({ min: 7, max: 25 }))]
    .map(() => {
      let user = faker.internet.userName();
      let avatarUrl = `/avatars/${faker.datatype.number({
        min: 0,
        max: 25,
      })}.jpg`;

      return [...Array(faker.datatype.number({ min: 1, max: 4 }))].map(() => ({
        id: faker.datatype.number(),
        user,
        avatarUrl,
        date: format(new Date(faker.date.past()), "MM/dd/yyyy"),
        text: faker.lorem.sentences(3),
      }));
    })
    .flat();
}
