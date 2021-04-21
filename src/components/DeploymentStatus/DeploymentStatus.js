import { Heading, Container, RadioButton, Input } from 'components';
import { object } from 'prop-types';
import { Field } from 'formik';

const DeploymentStatus = ({ values }) => {
  const { deploymentStatus } = values;
  return (
    <Container>
      <Heading as="h3" color="#212121" fontSize={1.6} margin="0 0 20px 0">
        배포 여부
      </Heading>
      <Container margin="0 0 20px 0">
        <Field
          component={RadioButton}
          name="deploymentStatus"
          value="deployed"
          type="radio"
          id="deployed"
          label="네! 프로젝트를 배포하였습니다! 😄"
          margin="0 70px 0 0"
        />
        <Field
          component={RadioButton}
          name="deploymentStatus"
          value="undeployed"
          type="radio"
          id="undeployed"
          label="아니오! 프로젝트를 배포하지 않았습니다 😭"
        />
      </Container>
      <Field
        component={Input}
        id="deploymentURL"
        name="deploymentURL"
        label="http://"
        labelFontSize={1.2}
        width={600}
        height={40}
        border="1px solid #EAEAEA"
        borderRadius={5}
        boxShadow="1px 2px 4px rgba(0, 0, 0, 0.1)"
        beforeTranslate={2.5}
        afterTranslate={-1}
        beforeMargin={8}
        afterMargin={3}
        disabled={deploymentStatus === 'undeployed' || deploymentStatus === ''}
      />
    </Container>
  );
};

DeploymentStatus.defaultProps = {
  values: {},
};

DeploymentStatus.propTypes = {
  /** formik이 가지고 있는 인풋들의 value들을 가지고 있는 객체입니다. */
  values: object.isRequired,
};

export default DeploymentStatus;
