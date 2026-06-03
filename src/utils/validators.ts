export const NAME_REGEX = /^(?=.*[a-zA-Z])[a-zA-Z\s'\-]{2,}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PHONE_REGEX = /^[\d\s\+\-\(\)]{7,15}$/;

export const isValidName = (val: string) => NAME_REGEX.test(val.trim());
export const isValidEmail = (val: string) => EMAIL_REGEX.test(val.trim());
export const isValidPhone = (val?: string) => !val || val.trim() === "" || PHONE_REGEX.test(val.trim());
