
import React, { useState, useEffect } from 'react';
import { Code, Monitor, Smartphone, Database, Globe, Zap } from 'lucide-react';

const WebDevAnimation = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 6);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { icon: Code, label: "Writing Code", color: "text-blue-500" },
    { icon: Database, label: "Database Setup", color: "text-green-500" },
    { icon: Globe, label: "API Integration", color: "text-purple-500" },
    { icon: Monitor, label: "Desktop Design", color: "text-orange-500" },
    { icon: Smartphone, label: "Mobile Optimization", color: "text-pink-500" },
    { icon: Zap, label: "Performance Boost", color: "text-yellow-500" }
  ];

  return (
    <div className={`relative w-full max-w-md mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* Code Window */}
      <div className="code-window mb-6">
        <div className="code-header">
          <div className="code-dot red"></div>
          <div className="code-dot yellow"></div>
          <div className="code-dot green"></div>
          <span className="text-sm text-gray-300 ml-2">app.tsx</span>
        </div>
        <div className="code-content text-sm">
          <div className="mb-2">
            <span className="text-purple-400">import</span>{" "}
            <span className="text-green-400">React</span>{" "}
            <span className="text-purple-400">from</span>{" "}
            <span className="text-yellow-400">'react'</span>
          </div>
          <div className="mb-2">
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">App</span> ={" "}
            <span className="text-yellow-400">()</span>{" "}
            <span className="text-purple-400">=&gt;</span> {"{"}
          </div>
          <div className="ml-4 mb-2">
            <span className="text-purple-400">return</span> (
          </div>
          <div className="ml-8 mb-2">
            <span className="text-green-400">&lt;div</span>{" "}
            <span className="text-blue-400">className</span>=
            <span className="text-yellow-400">"app"</span>
            <span className="text-green-400">&gt;</span>
          </div>
          <div className="ml-12 mb-2 typing-animation">
            Building Amazing Websites...
          </div>
          <div className="ml-8">
            <span className="text-green-400">&lt;/div&gt;</span>
          </div>
          <div className="ml-4">)</div>
          <div>{"}"}</div>
        </div>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
      </div>

      {/* Development Steps */}
      <div className="grid grid-cols-3 gap-4">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div
              key={index}
              className={`flex flex-col items-center p-4 rounded-lg transition-all duration-500 ${
                isActive
                  ? 'bg-gradient-to-r from-purple-100 to-blue-100 scale-110 pulse-glow'
                  : isCompleted
                  ? 'bg-green-50 scale-100'
                  : 'bg-gray-50 scale-95'
              }`}
            >
              <div
                className={`p-3 rounded-full mb-2 transition-all duration-500 ${
                  isActive
                    ? 'bg-white shadow-lg animate-bounce-in'
                    : isCompleted
                    ? 'bg-green-100'
                    : 'bg-gray-100'
                }`}
              >
                <IconComponent
                  className={`w-6 h-6 transition-all duration-300 ${
                    isActive
                      ? `${step.color} animate-rotate-360`
                      : isCompleted
                      ? 'text-green-600'
                      : 'text-gray-400'
                  }`}
                />
              </div>
              <span
                className={`text-xs text-center font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-purple-700'
                    : isCompleted
                    ? 'text-green-700'
                    : 'text-gray-500'
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20 float-slow"></div>
      <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-30 float-medium"></div>
      <div className="absolute top-1/2 -right-6 w-4 h-4 bg-gradient-to-r from-green-400 to-teal-400 rounded-full opacity-25 float-fast"></div>
    </div>
  );
};

export default WebDevAnimation;
