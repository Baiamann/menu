"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import "./brone.css";

const Brone = () => {
  const router = useRouter();
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: ""
  });

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+996\s?\(?[0-9]{3}\)?\s?[0-9]{2}-?[0-9]{2}-?[0-9]{2}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      date: "",
      time: "",
      guests: ""
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Введите ваше имя";
      isValid = false;
    }

    if (!validatePhone(formData.phone)) {
      newErrors.phone = "Введите корректный номер телефона (+996 XXX XX-XX-XX)";
      isValid = false;
    }

    if (!formData.date) {
      newErrors.date = "Выберите дату";
      isValid = false;
    }

    if (!formData.time) {
      newErrors.time = "Выберите время";
      isValid = false;
    }

    if (!formData.guests) {
      newErrors.guests = "Выберите количество гостей";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSuccessModalOpen(true);
    }
  };

  const handleGoHome = () => {
    router.push('/');
  };

  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    let formatted = '+996 ';
    if (numbers.length > 0) {
      formatted += `(${numbers.slice(0, 3)}`;
      if (numbers.length > 3) {
        formatted += `) ${numbers.slice(3, 5)}`;
        if (numbers.length > 5) {
          formatted += `-${numbers.slice(5, 7)}`;
          if (numbers.length > 7) {
            formatted += `-${numbers.slice(7, 9)}`;
          }
        }
      }
    }
    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formatted
    }));
  };

  return (
    <main className="booking-page">
      <div className="booking-container">
        <h1>Забронировать стол</h1>
        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label htmlFor="name">Ваше имя</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Введите ваше имя"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Телефон</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="+996 (XXX) XX-XX-XX"
              className={errors.phone ? "error" : ""}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="date">Дата</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className={errors.date ? "error" : ""}
            />
            {errors.date && <span className="error-message">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="time">Время</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              min="10:00"
              max="22:00"
              className={errors.time ? "error" : ""}
            />
            {errors.time && <span className="error-message">{errors.time}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="guests">Количество гостей</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className={errors.guests ? "error" : ""}
            >
              <option value="">Выберите количество гостей</option>
              <option value="1">1 гость</option>
              <option value="2">2 гостя</option>
              <option value="3">3 гостя</option>
              <option value="4">4 гостя</option>
              <option value="5">5 гостей</option>
              <option value="6">6 гостей</option>
            </select>
            {errors.guests && <span className="error-message">{errors.guests}</span>}
          </div>

          <button type="submit" className="submit-button">
            Забронировать
          </button>
        </form>
      </div>

      {isSuccessModalOpen && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h2>Стол успешно забронирован!</h2>
              <div className="booking-details">
                <p><strong>Имя:</strong> {formData.name}</p>
                <p><strong>Телефон:</strong> {formData.phone}</p>
                <p><strong>Дата:</strong> {new Date(formData.date).toLocaleDateString()}</p>
                <p><strong>Время:</strong> {formData.time}</p>
                <p><strong>Количество гостей:</strong> {formData.guests}</p>
              </div>
              <p className="success-message">
                Мы свяжемся с вами для подтверждения бронирования.
              </p>
              <button onClick={handleGoHome} className="home-button">
                На главную
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Brone; 