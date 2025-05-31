class ContactClass {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  userId: string;
  isRead: boolean;
  constructor(
    fullName: string,
    email: string,
    subject: string,
    message: string,
    userId: string,
    isRead: boolean = false
  ) {
    this.fullName = fullName;
    this.email = email;
    this.subject = subject;
    this.message = message;
    this.userId = userId;
    this.isRead = isRead;
  }
}

export default ContactClass;
