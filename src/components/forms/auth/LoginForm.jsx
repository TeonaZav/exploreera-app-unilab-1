import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast, { Toaster } from "react-hot-toast";
import { loginValidationSchema } from "./Schema";
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
import FormBtnGroup from "./FormBtnGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../../context/ModalContext";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const { isOpen, openModal, closeModal } = useModal();
  const [termsAgreed, setTermsAgreed] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState("te@gmail.com");
  const [password, setPassword] = useState("123123");

  const navigate = useNavigate();

  const handleTermsAgree = () => {
    setTermsAgreed(true);
    closeModal();
  };

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const onSubmit = (data) => {
    const { userEmail, userPassword } = data;
    login(userEmail, userPassword);
    toast.success("User logged in.");
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/flights", { replace: true });
    console.log(isAuthenticated);
  }, [isAuthenticated, navigate]);

  const onError = (errors) => {
    console.log(errors);
    toast.error(toast.error.message || "Invalid login attempt");
  };

  console.log(watch("userEmail", "userPassword"));

  return (
    <>
      {isOpen && (
        <Modal>
          <ModalContent onAgree={handleTermsAgree} />
        </Modal>
      )}
      <StyledLoginCt>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label="Email"
            error={errors?.userEmail?.message?.toString()}
          >
            <Input
              type="text"
              id="userEmail"
              {...register("userEmail")}
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField
            label="Password"
            error={errors?.userPassword?.message?.toString()}
          >
            <Input
              type="password"
              id="userPassword"
              {...register("userPassword")}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormField>
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

export default LoginForm;
