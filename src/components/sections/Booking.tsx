"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import LuxuryButton from '../ui/LuxuryButton';
import LoadingOverlay from '../ui/LoadingOverlay';

const services = [
  { id: 1, name: 'Classic Haircut', duration: 45, price: 45 },
  { id: 2, name: 'Hot Towel Shave', duration: 30, price: 35 },
  { id: 3, name: 'Beard Trim & Shape', duration: 30, price: 30 },
  { id: 4, name: 'Premium Package', duration: 90, price: 95 },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
];

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section id="booking" className="py-24 bg-black text-white relative overflow-hidden">
      <LoadingOverlay isLoading={isSubmitting} message="Booking your appointment..." />
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display mb-6">
              Book Your Experience
            </h2>
            <p className="text-lg text-white/80">
              Select your preferred service and time slot for a premium grooming experience.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="booking-form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="bg-secondary/50 backdrop-blur-sm rounded-lg p-8"
              >
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-display mb-6">Select Service</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => {
                            setSelectedService(service.id);
                            setStep(2);
                          }}
                          className={`p-6 text-left rounded-lg border transition-all duration-300 ${
                            selectedService === service.id
                              ? 'border-accent bg-accent/10'
                              : 'border-white/20 hover:border-accent/50'
                          }`}
                        >
                          <h4 className="text-xl font-display mb-2">{service.name}</h4>
                          <div className="flex justify-between text-white/60">
                            <span>{service.duration} min</span>
                            <span className="text-accent">${service.price}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Date Selection */}
                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-display mb-6">Select Date</h3>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 7 }, (_, i) => {
                        const date = new Date();
                        date.setDate(date.getDate() + i);
                        const dateStr = date.toISOString().split('T')[0];
                        return (
                          <button
                            key={dateStr}
                            type="button"
                            onClick={() => {
                              setSelectedDate(dateStr);
                              setStep(3);
                            }}
                            className={`p-4 rounded-lg border transition-all duration-300 ${
                              selectedDate === dateStr
                                ? 'border-accent bg-accent/10'
                                : 'border-white/20 hover:border-accent/50'
                            }`}
                          >
                            <div className="text-sm text-white/60">
                              {date.toLocaleDateString('en-US', { weekday: 'short' })}
                            </div>
                            <div className="text-lg font-display">
                              {date.getDate()}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Time Selection */}
                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-display mb-6">Select Time</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 rounded-lg border transition-all duration-300 ${
                            selectedTime === time
                              ? 'border-accent bg-accent/10'
                              : 'border-white/20 hover:border-accent/50'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="text-white/60 hover:text-accent transition-colors duration-300"
                    >
                      ← Back
                    </button>
                  )}
                  {step === 3 && (
                    <LuxuryButton
                      type="submit"
                      disabled={isSubmitting}
                      className="ml-auto"
                    >
                      {isSubmitting ? 'Confirming...' : 'Confirm Booking'}
                    </LuxuryButton>
                  )}
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-message"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center bg-secondary/50 backdrop-blur-sm rounded-lg p-12"
              >
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-display mb-4">Booking Confirmed!</h3>
                <p className="text-white/80 mb-8">
                  We've sent a confirmation email with your booking details.
                </p>
                <LuxuryButton
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                    setSelectedService(null);
                    setSelectedDate('');
                    setSelectedTime('');
                  }}
                >
                  Book Another Service
                </LuxuryButton>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
} 