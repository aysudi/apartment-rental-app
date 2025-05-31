import * as Yup from "yup";

const contactFormSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email address"),
  subject: Yup.string()
    .required("Subject is required")
    .min(3, "Subject must be at least 3 characters"),
  message: Yup.string()
    .required("Message is required")
    .min(10, "Message must be at least 10 characters"),
});

export default contactFormSchema;
