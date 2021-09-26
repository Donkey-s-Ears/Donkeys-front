import { useState, useRef } from 'react';
import styled from 'styled-components';
import { DownArrow } from '../../styled/arrow.styled';

const EmailInput = styled.input`
  width: 220px;
  border: 1px solid gray;
  line-height: 2.5rem;
  font-size: 1.2rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  width: 460px;
  align-items: center;
  margin-top: 20px;
`;

const DropDownArrow = styled(DownArrow)`
  position: absolute;
  top: 50%;
  right: 10%;
`;

const DomainWrapper = styled.div`
  position: relative;
`;

const DropDownAnchor = styled.div`
  position: absolute;
  display: ${props => props.isActive};
`;

const DropDownWrapper = styled.div`
  width: 220px;
  height: 200px;
  background-color: white;
`;

const DropDownUl = styled.ul`
  overflow: hidden;
  list-style-type: none;
  padding: 0;
  li {
    &:hover {
      text-decoration: underline;
    }
  }
`;

const EmailForm = () => {
  const [Addr, setAddr] = useState('');
  const [isActive, setIsActive] = useState(true);
  const domainInput = useRef('');
  const domainList = ['직접입력', 'naver.com', 'daum.net', 'gmail.com', 'nate.com', 'hanmail.net'];

  const onClickUl = e => {
    console.log('onClickUl');
    if (e.target.innerText === '직접입력') {
      setAddr('');
      domainInput.current.focus();
    } else {
      setAddr(e.target.innerText);
    }
  };

  const onChange = e => {
    console.log('onChange');
    setAddr(() => e.target.value);
  };

  const onClick = e => {
    e.stopPropagation();
    console.log('onClick');
    setIsActive(prev => !prev);
  };

  const onBlur = () => {
    setIsActive(false);
  };

  const handleMouseDown = e => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <EmailInput name="emailId" placeholder="이메일 아이디" type="text" required />
      &nbsp;@&nbsp;
      <DomainWrapper onClick={onClick}>
        <DropDownArrow />
        <EmailInput
          name="emailAddr"
          value={Addr}
          placeholder="직접입력"
          type="text"
          onChange={onChange}
          onBlur={onBlur}
          pattern="[a-z0-9.-]+\.[a-z]{2,}$"
          autoComplete="off"
          ref={domainInput}
          required
        />
        <DropDownAnchor onMouseDown={handleMouseDown} isActive={isActive ? 'block' : 'none'}>
          <DropDownWrapper>
            <DropDownUl onClick={onClickUl}>
              {domainList.map(domain => (
                <li key={domain}>{domain}</li>
              ))}
            </DropDownUl>
          </DropDownWrapper>
        </DropDownAnchor>
      </DomainWrapper>
    </Wrapper>
  );
};

export default EmailForm;
