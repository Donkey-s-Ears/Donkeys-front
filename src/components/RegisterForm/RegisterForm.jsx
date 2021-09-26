import { useRef, useState } from 'react';
import { RegisterFormAvartarStyled } from './RegisterForm.styled.jsx';
import { FormStyled } from '../../styled/form.styled.js';
import { Wrapper } from '../../styled/wrapper.styled';
import InputWithLabel from '../Form/InputWithLabel.jsx';
import FormButtonStyled from '../Form/FormButton.jsx';
import EmailForm from '../Form/EmailForm.jsx';

const RegisterForm = () => {
  const avartarImg = useRef(null);
  const avartarInput = useRef(null);
  const avartarWrapper = useRef(null);
  const [checkImg, setCheckImg] = useState(false);

  const onChangeAvartarFile = e => {
    const input = e.target;
    if (input.files[0].size > 250 * 1024) {
      alert('파일 사이즈가 250kb를 넘습니다.');
      return;
    }
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = e => {
        avartarImg.current.src = e.target.result;
        avartarWrapper.current.style.border = 0;
        setCheckImg(true);
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

  const handleClick = e => {
    avartarInput.current.click();
  };

  return (
    <Wrapper>
      <FormStyled onSubmit={handleSubmit}>
        <RegisterFormAvartarStyled ref={avartarWrapper} onClick={handleClick}>
          <img ref={avartarImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <input name="avartar" type="file" onChange={onChangeAvartarFile} style={{ display: 'none' }} ref={avartarInput} />
          <RegisterFormAvartarStyled.context check={checkImg}>
            클릭해 아바타<br></br>이미지 등록<br></br>200x200
          </RegisterFormAvartarStyled.context>
        </RegisterFormAvartarStyled>
        <EmailForm />
        <InputWithLabel name="password" placeholder="비밀번호를 입력해주세요." type="password" required />
        <InputWithLabel name="nickname" placeholder="닉네임을 입력해주세요." type="text" required />
        <FormButtonStyled type="submit">회원등록</FormButtonStyled>
      </FormStyled>
    </Wrapper>
  );
};

export default RegisterForm;
