import { useRef } from 'react';
import RegisterFormStyled, { Wrapper } from './RegisterForm.styled.jsx';
import InputWithLabel from '../Form/InputWithLabel.jsx';
import FormButton from '../Form/FormButton.jsx';
import EmailForm from '../Form/EmailForm.jsx';

const RegisterForm = () => {
  const avartarImg = useRef(null);

  const onChangeAvartarFile = e => {
    const input = e.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        avartarImg.current.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const registerObj = {};
    registerObj.avartar = new FormData();
    registerObj.email = `${e.target.emailId.value}@${e.target.emailAddr.value}`;
    registerObj.password = e.target.password.value;
    registerObj.nickname = e.target.nickname.value;
    registerObj.avartar.append('avartar', e.target.avartar.files[0]);
    console.log(registerObj);
    console.log(registerObj.avartar.get('avartar'));
    // window.location.replace('/');
  };

  return (
    <Wrapper>
      <RegisterFormStyled onSubmit={handleSubmit}>
        <EmailForm />
        <InputWithLabel name="password" placeholder="비밀번호를 입력해주세요." type="password" required />
        <InputWithLabel name="nickname" placeholder="닉네임을 입력해주세요." type="text" required />
        <InputWithLabel name="avartar" placeholder="아바타로 사용할 이미지를 업로드해주세요." type="file" onChange={onChangeAvartarFile} />
        <img ref={avartarImg} style={{ width: '200px' }} />
        <FormButton type="submit">회원 가입</FormButton>
      </RegisterFormStyled>
    </Wrapper>
  );
};

export default RegisterForm;
