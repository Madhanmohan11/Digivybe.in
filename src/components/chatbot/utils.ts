
export const getAIResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  const keywords = lowerMessage.split(' ');
  
  const personalizedGreetings = [
    `Great to hear from you! Let me help you with that.`,
    `I love your enthusiasm! Here's what I can share:`,
    `Perfect question! Based on your interests, here's my recommendation:`,
    `Excellent choice! Let me provide you with detailed information:`
  ];

  if (keywords.some(word => ['web', 'website', 'development', 'site'].includes(word))) {
    return `🌟 ${personalizedGreetings[0]} Our web development magic involves creating stunning, lightning-fast websites that convert visitors into customers! We use cutting-edge tech like React, Next.js, and AI-powered optimization. Our websites load in under 2 seconds and have helped clients increase their revenue by 200%! Packages start from ₹25,000. Ready to see your dream website come to life?`;
  }
  
  if (keywords.some(word => ['ecommerce', 'e-commerce', 'shop', 'store', 'online'].includes(word))) {
    return `🛒 E-commerce excellence is our superpower! We build stores that practically sell themselves with AI-powered product recommendations, one-click checkout, and conversion rates that average 40% higher than industry standard. Our clients see ROI within 3 months! Packages from ₹50,000. Want to see a live demo of our latest store?`;
  }
  
  if (keywords.some(word => ['seo', 'search', 'ranking', 'google', 'marketing'].includes(word))) {
    return `📈 SEO mastery is what we do best! Our AI-driven strategies have helped clients achieve first-page Google rankings in just 90 days. We don't just optimize - we dominate search results! Recent client saw 500% traffic increase. Monthly packages from ₹15,000. Ready for a free SEO audit that will blow your mind?`;
  }
  
  if (keywords.some(word => ['logo', 'design', 'brand', 'graphic'].includes(word))) {
    return `🎨 Brand magic happens here! Our designers create logos and brand identities that become instantly recognizable. We've designed for startups that became unicorns! Every design tells a story and captures hearts. Logo packages from ₹8,000. Want to see our award-winning portfolio?`;
  }
  
  if (keywords.some(word => ['price', 'cost', 'budget', 'quote', 'affordable'].includes(word))) {
    return `💎 Smart investment question! Our pricing is designed to deliver maximum ROI. Basic websites ₹25,000, E-commerce ₹50,000, Enterprise custom-quoted. We offer flexible payment plans and guarantee results. Most clients recover their investment within 6 months. What's your budget range? I can create a custom package!`;
  }
  
  if (keywords.some(word => ['time', 'deadline', 'urgent', 'fast', 'quick'].includes(word))) {
    return `⚡ Speed is our middle name! Typical delivery: Simple websites (7-10 days), E-commerce (2-3 weeks), Custom apps (4-6 weeks). Need it faster? Our express service can deliver in half the time. What's your ideal timeline?`;
  }

  const engagingResponses = [
    "That's fascinating! While I don't have specific details on that topic, our team of experts would love to explore this with you. Every challenge is an opportunity for innovation! What specific goals are you trying to achieve?",
    "You know what? That's exactly the kind of forward-thinking approach we love! Our team thrives on unique challenges and turning impossible ideas into reality. Let's schedule a brainstorming session!",
    "I appreciate your question! Innovation happens when we combine creativity with technology. Our adaptable approach means we can tackle any digital challenge. What's the biggest problem you're trying to solve?",
    "Brilliant point! The digital world is constantly evolving, and that's what makes our work so exciting. We stay ahead of trends to deliver tomorrow's solutions today. How can we help transform your vision?"
  ];
  
  return engagingResponses[Math.floor(Math.random() * engagingResponses.length)];
};

export const getQuickActionResponse = (action: string): string => {
  switch (action) {
    case 'quote':
      return "I'd love to create a custom quote for you! Let me ask a few quick questions to provide the most accurate pricing.";
    case 'portfolio':
      return "Amazing! Our portfolio showcases 200+ successful projects across various industries. Which type of project interests you most?";
    case 'call':
      return "Perfect! I can schedule a free consultation call with our experts. When works best for you - morning or afternoon?";
    case 'chat':
      return "You're already chatting with me! 😊 I'm here to help with any questions. What would you like to know about our services?";
    default:
      return "I'm here to help! What would you like to know about our services?";
  }
};
