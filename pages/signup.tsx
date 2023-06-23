import React, { Fragment, useState } from "react"
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Logo } from "@/components/Logo";
// import { OAuthButtonGroup } from "@/components/OAuthButtonGroup";
import { PasswordField } from "@/components/PasswordField"; 

// signup
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Signup: React.FC<{}> = () => {

  // 新規登録で使用するemailとpasswordの状態管理
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");

  // 入力された値をuseStateで管理するようの関数
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value)
  }

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value)
  }
    

  return (
    <>
      <Container
        pos="absolute"
        top="120"
        left="280"
        bg="#ffc2c2"
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Stack spacing="6">
            <Logo />
            <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
              <Heading size={{ base: "xs", md: "sm" }}>
                Create an account
              </Heading>
              <HStack spacing="1" justify="center">
                <Text color="fg.muted">Already have an account?</Text>
                <Button variant="text" colorScheme="blue">
                  Login
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "#ecd0d0", sm: "bg.surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleChangeEmail(event)
                  }}/>
                </FormControl>
                <PasswordField />
              </Stack>

              <Stack spacing="6">
                <Button variant="primary">Create an account</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Signup;
