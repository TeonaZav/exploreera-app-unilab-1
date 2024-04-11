import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { signUpValidationSchema } from "./Schema";
import FormField from "../FormField";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import ModalContent from "./ModalContent";
import {
  Input,
  StyledLoginCt,
  StyledForm,
  PrivacyPolicy,
} from "./styles/SharedFormStyles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../context/ModalContext";
import FormBtnGroup from "./FormBtnGroup";
import ImageIcon from "./../../../assets/photo-icon.png";

const SignUpForm = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleTermsAgree = () => {
    setTermsAgreed(true);
    closeModal();
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(signUpValidationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = methods;

  const onSubmit = (data) => {
    toast.success(toast.success.message || "User logged in.");
    console.log(data);

    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("userEmail", data.userEmail);
    formData.append("userPassword", data.userPassword);
    formData.append("userImage", data.userImage[0]);

    const jsonFormData = JSON.stringify(Object.fromEntries(formData));
    localStorage.setItem("userDataTeona", jsonFormData);
  };

  const onError = (errors) => {
    console.log(errors);
    toast.error(toast.error.message || "Invalid login attempt");
  };

  const onFileChange = (event) => {
    setValue("userImage", event.target.files[0]);
  };

  const userImage = watch("userImage");

  useEffect(() => {
    return () => {
      if (userImage) {
        URL.revokeObjectURL(userImage.preview);
      }
    };
  }, [userImage]);

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalContent onAgree={handleTermsAgree} />
        </Modal>
      )}
      <StyledLoginCt>
        <StyledForm onSubmit={handleSubmit(onSubmit, onError)}>
          <FormField
            id="firstName"
            label="First Name"
            error={errors?.firstName?.message?.toString()}
          >
            <Input
              type="text"
              id="firstName"
              {...register("firstName")}
              placeholder="Enter your first name"
            />
          </FormField>
          <FormField
            id="lastName"
            label="Last Name"
            error={errors?.lastName?.message?.toString()}
          >
            <Input
              type="text"
              id="lastName"
              {...register("lastName")}
              placeholder="Enter your last name"
            />
          </FormField>
          <FormField
            id="userEmail"
            label="Email"
            error={errors?.userEmail?.message?.toString()}
          >
            <Input
              type="text"
              id="userEmail"
              {...register("userEmail")}
              placeholder="Enter your email address"
            />
          </FormField>
          <FormField
            id="userPassword"
            label="Password"
            error={errors?.userPassword?.message?.toString()}
          >
            <Input
              type="password"
              id="userPassword"
              {...register("userPassword")}
              placeholder="Enter your password"
            />
          </FormField>
          <FormField
            label="Password"
            error={errors?.confirmPassword?.message?.toString()}
          >
            <Input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              placeholder="Re-enter your password"
            />
          </FormField>
          <CustomFileUpload htmlFor="file-upload">
            {userImage ? (
              <img src={URL.createObjectURL(userImage)} alt="image preview" />
            ) : (
              <img src={ImageIcon} alt="Image Icon" />
            )}
          </CustomFileUpload>
          <StyledFileInput
            id="file-upload"
            type="file"
            onChange={onFileChange}
            accept="image/*"
          />

          {termsAgreed ? (
            <Button type="submit" height="5rem">
              Submit
            </Button>
          ) : (
            <Button type="button" height="5rem" onClick={openModal}>
              Continue
            </Button>
          )}
        </StyledForm>
        <FormBtnGroup />

        <Toaster position="top-center" />
        <PrivacyPolicy>
          {termsAgreed && <FontAwesomeIcon icon={faCheck} className="icon" />}
          <span>By signing in or creating an account, you agree with our</span>
          <button type="button" onClick={openModal}>
            Terms & conditions
          </button>
          <span>and</span>
          <button type="button" onClick={openModal}>
            Privacy policy
          </button>
        </PrivacyPolicy>
      </StyledLoginCt>
    </>
  );
};

const StyledFileInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;
  z-index: -1;
`;
const CustomFileUpload = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
  background-color: #e6ebff;
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  background-size: cover;
  background-position: center;
  font-family: Arial, sans-serif;
  color: #000;
  overflow: hidden;

  &::after {
    content: "";
    display: ${({ imageUploaded }) => (imageUploaded ? "none" : "block")};
  }
`;
export default SignUpForm;
