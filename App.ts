// Defined type for tab names
type TabName = "home" | "chat" | "settings";

// Defined interface for page contents

interface TabContent
{
    title: string;
    description: string;
}

// Map tabs to their content using a strictly-typed Record
const tabContents: Record<TabName, TabContent> =
{
    home: 
    {
        title: "Home",
        description: "Welcome to InboxOS!"
    },
    chat:
    {
        title: "Chat",
        description: "Welcome to chat!"
    },
    settings:
    {
        title: "Settings",
        description: "Welcome to settings!"
    }
}

// Safely query elements and handle potential null states
const contentSection = document.getElementById("content") as HTMLElement | null;
const headingSection = contentSection?.querySelector("h1") as HTMLElement | null;
const textElement = contentSection?.querySelector("p") as HTMLElement | null;

function navigateTo(tab: TabName): void
{
    if (!headingSection || !textElement)
    {
        console.error("DOM Elements for content rendering are missing!");
        return;
    }
}


