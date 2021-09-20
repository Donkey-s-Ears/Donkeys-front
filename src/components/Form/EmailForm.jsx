import { useState } from 'react';
import styled from 'styled-components';

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
`;

const DomainWrapper = styled.div`
  display: relative;
	&:after {
		content: '\003E';
	}
`;

const DropDownAnchor = styled.div`
  position: absolute;
  height: 0px;
`;

const DropDownWrapper = styled.div`
  height: 200px;
  opacity: ${props => props.isActive};
`;

const DropDownUl = styled.ul`
  overflow: hidden;
  list-style-type: none;
  li {
    text-decoration: 1px solid black;
  }
`;

const EmailForm = () => {
  const [Addr, setAddr] = useState('');
  const [isActive, setIsActive] = useState(false);
  const domainList = ['직접입력', 'naver.com', 'daum.net', 'gmail.com', 'nate.com', 'hanmail.net'];

  const onChange = e => {
    console.log(e.target.value);
    if (e.target.value === '직접입력') {
      e.target.value = '';
    }
    setAddr(e.target.value);
  };

  const onClick = () => {
    setIsActive(prev => !prev);
    console.log(isActive);
  };

  return (
    <Wrapper>
      <EmailInput name="emailId" placeholder="이메일 아이디" type="text" />
      <div>&nbsp;@&nbsp;</div>
      <DomainWrapper onClick={onClick}>
        <EmailInput name="emailAddr" value={Addr} placeholder="직접입력" type="text" onChange={onChange} />
        <DropDownAnchor>
          <DropDownWrapper isActive={Number(isActive)}>
            <DropDownUl>
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
