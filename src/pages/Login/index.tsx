import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
    Typography,
} from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import "../Login/login.styles.scss";
import { defaultLogin } from "./login.type";
import { useHistory } from "react-router-dom";
const resetLogin = {
    mhs: "",
    password: "",
    rememberClient: false,
};
const formSchema = Yup.object().shape({
    mhs: Yup.string().required("Email is required"),
    password: Yup.string().required("Vui lòng nhập mật khẩu"),
});
const LoginPage = () => {
    const history = useHistory();
    const formOptions = { resolver: yupResolver(formSchema) };
    const { reset, control, handleSubmit } = useForm<defaultLogin>(formOptions);

    const onSubmit = (data: defaultLogin) => {
        console.log("submit: ", data);
        history.push("/");
    };
    return (
        <Box className="container">
            <Box className="content-box">
                <Box className="login-form">
                    <h1 className="login-tittle">Đăng nhập</h1>
                    <form
                        className="form-container"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Box>
                            <Controller
                                name="mhs"
                                control={control}
                                defaultValue=""
                                render={({ field, fieldState }) => (
                                    <TextField
                                        className="input-field"
                                        InputProps={{
                                            style: { fontSize: "20px" },
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: "20px" },
                                        }}
                                        margin="normal"
                                        label="Mã học sinh"
                                        value={field.value}
                                        color="secondary"
                                        onChange={field.onChange}
                                        inputRef={field.ref}
                                        error={!!fieldState.error}
                                        helperText={
                                            fieldState.error
                                                ? fieldState.error.message
                                                : null
                                        }
                                        fullWidth
                                    />
                                )}
                                rules={{ required: true }}
                            />
                        </Box>
                        <Box>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                render={({ field, fieldState }) => (
                                    <TextField
                                        className="input-field"
                                        InputProps={{
                                            style: { fontSize: "20px" },
                                        }}
                                        InputLabelProps={{
                                            style: { fontSize: "20px" },
                                        }}
                                        margin="normal"
                                        label="Mật khẩu"
                                        type="password"
                                        value={field.value}
                                        color="secondary"
                                        onChange={field.onChange}
                                        inputRef={field.ref}
                                        error={!!fieldState.error}
                                        helperText={
                                            fieldState.error
                                                ? fieldState.error.message
                                                : null
                                        }
                                        fullWidth
                                    />
                                )}
                                rules={{ required: true }}
                            />
                        </Box>
                        <Box>
                            <Controller
                                name="rememberClient"
                                control={control}
                                defaultValue={false}
                                render={({ field }) => (
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                {...field}
                                                sx={{
                                                    color: "#6868ac",
                                                    "&.Mui-checked": {
                                                        color: "#6868ac",
                                                    },
                                                }}
                                            />
                                        }
                                        label={
                                            <Box component="div" fontSize={20}>
                                                Ghi nhớ đăng nhập
                                            </Box>
                                        }
                                    />
                                )}
                            />
                        </Box>
                        <Box>
                            <Button className="submitButton" type="submit">
                                Đăng nhập
                            </Button>
                        </Box>
                    </form>
                </Box>
                <Box className="login-welcome">
                    <Box
                        sx={{
                            width: "60%",
                            margin: "auto",
                            padding: "24% 0px",
                        }}
                    >
                        <h1 className="welcome-tittle">
                            WELCOME TO ACADEMY OF RAYA LUCARIA
                        </h1>
                        <Box className="quote-box">
                            <Box className="scroll-box">
                                <p>
                                    Hush, little culver.
                                    <br />
                                    I'll soon birth thee anew, a sweeting fresh
                                    and pure...
                                    <br />
                                    Ahh, my beloved...
                                    <br />
                                    Have no fear, I will hold thee. Patience.
                                    <br />
                                    Ye will be countless born, forever and ever.
                                    <br />
                                    Upon my name as Ranni the Witch.
                                    <br />
                                    Mother's rich slumber shall not be disturbed
                                    by thee.
                                    <br />
                                    Foul trespasser.
                                    <br />
                                    Send word far and wide.
                                    <br />
                                    Of the last Queen of Caria, Rennala of the
                                    Full Moon.
                                    <br />
                                    And the majesty of the night she conjureth
                                    <br />
                                    Oh little Ranni, my dear daughter.
                                    <br />
                                    Weave thy night into being.
                                    <br />
                                    -RENNALA-
                                </p>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
