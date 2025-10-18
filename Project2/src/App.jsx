import React from "react";
import Card from "./components/Card";

const App = () => {


  const jobs = [
  { companyName: "Google", logo: "https://logo.clearbit.com/google.com", position: "Frontend Developer", type: ["Full-Time", "Remote"], payPerHour: 60 },
  { companyName: "Microsoft", logo: "https://logo.clearbit.com/microsoft.com", position: "Backend Developer", type: ["Part-Time", "Hybrid"], payPerHour: 45 },
  { companyName: "Amazon", logo: "https://logo.clearbit.com/amazon.com", position: "UI/UX Designer", type: ["Full-Time", "Onsite"], payPerHour: 55 },
  { companyName: "Netflix", logo: "https://logo.clearbit.com/netflix.com", position: "React Developer", type: ["Part-Time", "Remote"], payPerHour: 50 },
  { companyName: "Meta", logo: "https://logo.clearbit.com/meta.com", position: "AI Engineer", type: ["Full-Time", "Hybrid"], payPerHour: 70 },
  { companyName: "Tesla", logo: "https://logo.clearbit.com/tesla.com", position: "Software Tester", type: ["Part-Time", "Onsite"], payPerHour: 40 },
  { companyName: "Apple", logo: "https://logo.clearbit.com/apple.com", position: "iOS Developer", type: ["Full-Time", "Remote"], payPerHour: 65 },
  { companyName: "Adobe", logo: "https://logo.clearbit.com/adobe.com", position: "Graphic Designer", type: ["Part-Time", "Hybrid"], payPerHour: 35 },
  { companyName: "IBM", logo: "https://logo.clearbit.com/ibm.com", position: "Data Scientist", type: ["Full-Time", "Remote"], payPerHour: 68 },
  { companyName: "Intel", logo: "https://logo.clearbit.com/intel.com", position: "Embedded Engineer", type: ["Full-Time", "Onsite"], payPerHour: 52 },
  { companyName: "Oracle", logo: "https://logo.clearbit.com/oracle.com", position: "Database Administrator", type: ["Full-Time", "Hybrid"], payPerHour: 58 },
  { companyName: "Spotify", logo: "https://logo.clearbit.com/spotify.com", position: "Audio Engineer", type: ["Part-Time", "Remote"], payPerHour: 42 },
  { companyName: "Dropbox", logo: "https://logo.clearbit.com/dropbox.com", position: "Cloud Engineer", type: ["Full-Time", "Remote"], payPerHour: 66 },
  { companyName: "Slack", logo: "https://logo.clearbit.com/slack.com", position: "DevOps Engineer", type: ["Full-Time", "Hybrid"], payPerHour: 61 },
  { companyName: "Zoom", logo: "https://logo.clearbit.com/zoom.us", position: "Video Call Engineer", type: ["Part-Time", "Remote"], payPerHour: 39 },
  { companyName: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com", position: "Frontend Developer", type: ["Full-Time", "Hybrid"], payPerHour: 57 },
  { companyName: "Uber", logo: "https://logo.clearbit.com/uber.com", position: "Backend Developer", type: ["Full-Time", "Onsite"], payPerHour: 54 },
  { companyName: "Lyft", logo: "https://logo.clearbit.com/lyft.com", position: "React Native Developer", type: ["Part-Time", "Remote"], payPerHour: 43 },
  { companyName: "PayPal", logo: "https://logo.clearbit.com/paypal.com", position: "Payment Gateway Engineer", type: ["Full-Time", "Remote"], payPerHour: 59 },
  { companyName: "Stripe", logo: "https://logo.clearbit.com/stripe.com", position: "API Developer", type: ["Full-Time", "Hybrid"], payPerHour: 62 },
  { companyName: "Reddit", logo: "https://logo.clearbit.com/reddit.com", position: "Community Manager", type: ["Part-Time", "Remote"], payPerHour: 30 },
  { companyName: "Twitter (X)", logo: "https://logo.clearbit.com/twitter.com", position: "Backend Engineer", type: ["Full-Time", "Remote"], payPerHour: 56 },
  { companyName: "Pinterest", logo: "https://logo.clearbit.com/pinterest.com", position: "UI Developer", type: ["Full-Time", "Onsite"], payPerHour: 48 },
  { companyName: "Snapchat", logo: "https://logo.clearbit.com/snapchat.com", position: "Android Developer", type: ["Part-Time", "Hybrid"], payPerHour: 41 },
  { companyName: "Notion", logo: "https://logo.clearbit.com/notion.so", position: "Product Designer", type: ["Full-Time", "Remote"], payPerHour: 63 },
  { companyName: "Figma", logo: "https://logo.clearbit.com/figma.com", position: "UI/UX Researcher", type: ["Full-Time", "Hybrid"], payPerHour: 58 },
  { companyName: "Canva", logo: "https://logo.clearbit.com/canva.com", position: "Frontend Engineer", type: ["Part-Time", "Remote"], payPerHour: 44 },
  { companyName: "Twitch", logo: "https://logo.clearbit.com/twitch.tv", position: "Live Streaming Developer", type: ["Full-Time", "Remote"], payPerHour: 55 },
  { companyName: "Discord", logo: "https://logo.clearbit.com/discord.com", position: "Chat System Engineer", type: ["Full-Time", "Hybrid"], payPerHour: 60 },
  { companyName: "GitHub", logo: "https://logo.clearbit.com/github.com", position: "Open Source Engineer", type: ["Full-Time", "Remote"], payPerHour: 64 },
  { companyName: "Atlassian", logo: "https://logo.clearbit.com/atlassian.com", position: "Software Engineer", type: ["Full-Time", "Hybrid"], payPerHour: 59 },
  { companyName: "Shopify", logo: "https://logo.clearbit.com/shopify.com", position: "E-commerce Developer", type: ["Full-Time", "Remote"], payPerHour: 53 },
  { companyName: "Dell", logo: "https://logo.clearbit.com/dell.com", position: "System Engineer", type: ["Full-Time", "Onsite"], payPerHour: 47 },
  { companyName: "HP", logo: "https://logo.clearbit.com/hp.com", position: "Hardware Engineer", type: ["Part-Time", "Onsite"], payPerHour: 38 },
  { companyName: "LinkedIn", logo: "https://logo.clearbit.com/linkedin.com", position: "Frontend Developer", type: ["Full-Time", "Hybrid"], payPerHour: 52 },
  { companyName: "Dropbox", logo: "https://logo.clearbit.com/dropbox.com", position: "Cloud Security Engineer", type: ["Full-Time", "Remote"], payPerHour: 66 },
  { companyName: "ZoomInfo", logo: "https://logo.clearbit.com/zoominfo.com", position: "Data Analyst", type: ["Part-Time", "Remote"], payPerHour: 42 },
  { companyName: "Asana", logo: "https://logo.clearbit.com/asana.com", position: "Project Manager", type: ["Full-Time", "Hybrid"], payPerHour: 61 },
  { companyName: "Trello", logo: "https://logo.clearbit.com/trello.com", position: "Frontend Developer", type: ["Full-Time", "Remote"], payPerHour: 57 },
  { companyName: "Bitbucket", logo: "https://logo.clearbit.com/bitbucket.org", position: "Backend Engineer", type: ["Full-Time", "Onsite"], payPerHour: 50 },
  { companyName: "GitLab", logo: "https://logo.clearbit.com/gitlab.com", position: "DevOps Engineer", type: ["Full-Time", "Remote"], payPerHour: 62 },
  { companyName: "DigitalOcean", logo: "https://logo.clearbit.com/digitalocean.com", position: "Cloud Architect", type: ["Full-Time", "Hybrid"], payPerHour: 68 },
  { companyName: "OpenAI", logo: "https://logo.clearbit.com/openai.com", position: "Machine Learning Engineer", type: ["Full-Time", "Remote"], payPerHour: 72 },
  { companyName: "NVIDIA", logo: "https://logo.clearbit.com/nvidia.com", position: "AI Researcher", type: ["Full-Time", "Onsite"], payPerHour: 75 },
  { companyName: "CISCO", logo: "https://logo.clearbit.com/cisco.com", position: "Network Engineer", type: ["Full-Time", "Hybrid"], payPerHour: 58 },
  { companyName: "Salesforce", logo: "https://logo.clearbit.com/salesforce.com", position: "CRM Developer", type: ["Full-Time", "Remote"], payPerHour: 60 },
  { companyName: "Zoomcar", logo: "https://logo.clearbit.com/zoomcar.com", position: "React Developer", type: ["Part-Time", "Hybrid"], payPerHour: 46 },
  { companyName: "Swiggy", logo: "https://logo.clearbit.com/swiggy.com", position: "Backend Engineer", type: ["Full-Time", "Onsite"], payPerHour: 49 },
  { companyName: "Zomato", logo: "https://logo.clearbit.com/zomato.com", position: "Data Engineer", type: ["Full-Time", "Remote"], payPerHour: 51 },
  { companyName: "Byjus", logo: "https://logo.clearbit.com/byjus.com", position: "Web Developer", type: ["Full-Time", "Hybrid"], payPerHour: 45 },
  { companyName: "Flipkart", logo: "https://logo.clearbit.com/flipkart.com", position: "Frontend Engineer", type: ["Full-Time", "Remote"], payPerHour: 53 }
];


  return (
    <div className="min-h-screen w-full bg-black">
    <div className="flex p-10 justify-center flex-wrap gap-6 ">
       {jobs.map((item, idx)=>{
          return <Card values={item} key={idx} />
     })}
    </div>
    </div>
  );
};

export default App;
