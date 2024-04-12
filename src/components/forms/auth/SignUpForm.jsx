import { useEffect, useState } from "react";

// Libraries
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  Input,
  StyledLoginCt,
  StyledForm,
  PrivacyPolicy,
} from "./styles/SharedFormStyles";
import ImageIcon from "./../../../assets/photo-icon.png";

import FormField from "../FormField";
import Button from "../../UI/Button";
import Modal from "../../UI/Modal";
import ModalContent from "./ModalContent";
import FormBtnGroup from "./FormBtnGroup";
import { useModal } from "../../../context/ModalContext";
import { signUpValidationSchema } from "./Schema";
import { base64Image, addUser } from "../../../utils/helpers";

const SignUpForm = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleTermsAgree = () => {
    setTermsAgreed(true);
    closeModal();
  };

  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(signUpValidationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
    setValue,
  } = methods;

  const onSubmit = (data) => {
    console.log(data);
    const newUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      userEmail: data.userEmail,
      userPassword: data.userPassword,
      userImage:
        typeof data.userImage === "string" ? data.userImage : undefined,
    };

    const result = addUser(newUser);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  const onError = (errors) => {
    console.log(errors);
    toast.error(toast.error.message || "something went wrong");
  };

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      base64Image(file, (base64) => {
        setValue("userImage", base64);
      });
    }
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
            error={
              touchedFields.lastName && errors?.firstName?.message?.toString()
            }
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
              <img
                src={`data:image/png;base64,${userImage}`}
                alt="image preview"
                className="user-image"
              />
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
              Continue <FontAwesomeIcon icon={faArrowRight} className="icon" />
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

  background-color: #e6ebff;
  border-radius: 100%;
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  cursor: pointer;

  & .user-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default SignUpForm;
