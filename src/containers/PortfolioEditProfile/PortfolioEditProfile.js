import { Container, DND, Button, Input, Paragraph } from 'components';
import { color } from 'utils';
import { Field } from 'formik';
import useDetectViewport from 'hooks/useDetectViewport';

const PortfolioEditProfile = ({ setFieldValue, errors }) => {
  const { isDesktop, vw } = useDetectViewport();
  return (
    <Container background="#F19D85" height={isDesktop ? '970px' : '890px'}>
      <Container
        width={vw >= 1440 ? 1440 : '100%'}
        padding={isDesktop ? '70px 70px 0 70px' : '40px 30px 30px 30px'}
        display="flex"
        flexFlow="column nowrap"
        alignItems="center"
        minWidth="320px"
        textAlign="center"
      >
        <DND setFieldValue={setFieldValue} errors={errors} profile={true} borderRadius="50%" />
        <Button
          children="이미지 제거"
          color={color.mainColor}
          fontWeight="700"
          margin="30px 0 20px 0"
          hoverColor={color.white}
          hoverBackground={color.mainColor}
          border={`1px solid ${color.mainColor}`}
          background={color.white}
        />
        <Field
          component={Input}
          name="userName"
          id="userName"
          label="이름"
          labelFontSize={isDesktop ? 2 : 1.6}
          inputFontSize={2}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 4 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -240 : -255}
          afterMargin={isDesktop ? -260 : -275}
        />
        <Field
          component={Input}
          name="nickname"
          id="nickname"
          label="닉네임"
          labelFontSize={isDesktop ? 2 : 1.6}
          inputFontSize={2}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 4 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -225 : -240}
          afterMargin={isDesktop ? -245 : -260}
        />
        <Field
          component={Input}
          name="githubUrl"
          id="githubUrl"
          label="GitHub 주소를 입력하세요"
          labelFontSize={isDesktop ? 2 : 1.6}
          inputFontSize={2}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 4 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -55 : -110}
          afterMargin={isDesktop ? -75 : -130}
        />
        <Field
          component={Input}
          name="email"
          id="email"
          label="이메일을 입력하세요"
          labelFontSize={isDesktop ? 2 : 1.6}
          inputFontSize={2}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 10px 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 4 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -110 : -155}
          afterMargin={isDesktop ? -130 : -175}
        />
        <Field
          component={Input}
          name="blogUrl"
          id="blogUrl"
          label="블로그 주소를 입력하세요"
          labelFontSize={isDesktop ? 2 : 1.6}
          inputFontSize={2}
          width={isDesktop ? 300 : 315}
          height={42}
          border="1px solid #EAEAEA"
          borderRadius={5}
          margin="10px 0 0 0"
          boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
          beforeTranslate={isDesktop ? 4 : 3.8}
          afterTranslate={0}
          beforeMargin={isDesktop ? -70 : -120}
          afterMargin={isDesktop ? -90 : -140}
        />
        <Button
          children="회원탈퇴"
          color={color.white}
          fontWeight="700"
          fontSize={isDesktop ? 2.4 : 1.6}
          margin={isDesktop ? '50px 0 15px 0' : '30px 0 15px 0'}
          hoverColor="#FF6B6B"
          hoverBackground={color.white}
          background="#FF6B6B"
        />
        <Paragraph
          color="#666"
          fontSize={isDesktop ? 1.4 : 1.2}
          fontWeight={700}
          lineHeight={isDesktop ? 0 : 16}
        >
          탈퇴 시 작성하신 프로젝트 및 포트폴리오는{isDesktop ? null : <br />} 삭제되며 복구되지
          않습니다.
        </Paragraph>
      </Container>
    </Container>
  );
};

export default PortfolioEditProfile;