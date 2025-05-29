"use client";

import React, { useState } from 'react';
import styles from './brone.module.css';

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Пожалуйста, введите ваше имя';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Пожалуйста, введите ваш email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Пожалуйста, введите корректный email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Пожалуйста, введите ваш телефон';
    }
    
    if (!formData.date) {
      newErrors.date = 'Пожалуйста, выберите дату';
    }
    
    if (!formData.time) {
      newErrors.time = 'Пожалуйста, выберите время';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSuccess(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Забронировать столик</h1>
        <p>Заполните форму ниже, чтобы забронировать столик в нашем ресторане</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Имя</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            placeholder="Введите ваше имя"
          />
          {errors.name && <div className={styles.error}>{errors.name}</div>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            placeholder="Введите ваш email"
          />
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Телефон</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            placeholder="Введите ваш телефон"
          />
          {errors.phone && <div className={styles.error}>{errors.phone}</div>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="date">Дата</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.date && <div className={styles.error}>{errors.date}</div>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="time">Время</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className={styles.input}
          />
          {errors.time && <div className={styles.error}>{errors.time}</div>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="guests">Количество гостей</label>
          <select
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className={styles.select}
          >
            <option value="1">1 гость</option>
            <option value="2">2 гостя</option>
            <option value="3">3 гостя</option>
            <option value="4">4 гостя</option>
            <option value="5">5 гостей</option>
            <option value="6">6 гостей</option>
            <option value="7">7 гостей</option>
            <option value="8">8 гостей</option>
          </select>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="specialRequests">Особые пожелания</label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className={styles.input}
            placeholder="Напишите ваши особые пожелания"
            rows={4}
          />
        </div>

        <button type="submit" className={styles.button}>
          Забронировать
        </button>

        {success && (
          <div className={styles.success}>
            <h2 className={styles.successTitle}>Бронирование подтверждено!</h2>
            <div className={styles.successDetails}>
              <div className={styles.successDetail}>
                <span className={styles.successDetailLabel}>Имя:</span>
                <span className={styles.successDetailValue}>{formData.name}</span>
              </div>
              <div className={styles.successDetail}>
                <span className={styles.successDetailLabel}>Дата:</span>
                <span className={styles.successDetailValue}>{formatDate(formData.date)}</span>
              </div>
              <div className={styles.successDetail}>
                <span className={styles.successDetailLabel}>Время:</span>
                <span className={styles.successDetailValue}>{formData.time}</span>
              </div>
              <div className={styles.successDetail}>
                <span className={styles.successDetailLabel}>Количество гостей:</span>
                <span className={styles.successDetailValue}>{formData.guests}</span>
              </div>
            </div>
            <p className={styles.successMessage}>
              Спасибо за бронирование! Мы отправили подтверждение на ваш email. 
              Если у вас возникнут вопросы, пожалуйста, свяжитесь с нами по телефону.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingPage; 