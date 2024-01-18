
import { Controller, Post, Body } from '@nestjs/common';

@Controller('api/chat')
export class AppController {
  @Post()
  getChatResponse(@Body() body: { userInput: string }): string {
    const userMessage = body.userInput.toLowerCase();
    let aiResponse = 'I did not understand your message.';

    
    if (userMessage.includes('hello')) {
      aiResponse = 'Hi there! How are you today?Nice to meet u';
    } else if (userMessage.includes('how are you')) {
      aiResponse = 'I am just a program, but I am doing well. How about you?';
    } else if (userMessage.includes('weather')) {
      aiResponse = 'I cannot provide real-time weather information. Anything else on your mind?';
    } else if (userMessage.includes('bye')) {
      aiResponse = 'Goodbye! If you have more questions, feel free to ask.';
    } else if (userMessage.includes('thanks') || userMessage.includes('thank you')) {
      aiResponse = 'You are welcome! Is there anything else you need help with?';
    } else if (userMessage.includes('help')) {
      aiResponse = 'Of course! What do you need assistance with?';
    } else if (userMessage.includes('your name')) {
      aiResponse = 'I do not have a name. You can call me ChatBot.';
    } else if (userMessage.includes('programming')) {
      aiResponse = 'Programming is fascinating! Is there a specific language or topic you are interested in?';
    } else if (userMessage.includes('time')) {
      const currentTime = new Date().toLocaleTimeString();
      aiResponse = `The current time is ${currentTime}. Anything else you'd like to know?`;
    } else if (userMessage.includes('joke')) {
      aiResponse = 'Sure, here\'s a joke: Why did the computer go to therapy? It had too many bytes of emotional baggage!';
    } else if (userMessage.includes('sports')) {
      aiResponse = 'I am not into sports, but I can chat about them! Which sports do you enjoy?';
    } else if (userMessage.includes('movie')) {
      aiResponse = 'Movies are great! Do you have a favorite genre or movie you recently watched?';
    }

    return aiResponse;
  }
}
