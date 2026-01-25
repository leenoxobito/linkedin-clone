import styled from "styled-components";
import Main from "./Main";
import Rightside from "./Rightside";  
import Leftside from "./Leftside";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

const Home = ({user}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <Container>
      <Section>
        <h5><a>Hiring in a hurry? -</a></h5>
        <p>Find talented pros in record time with Upwork and keep business moving.</p>
      </Section>
      <Layout>
        <Leftside />
        <Main />
        <Rightside /> 
      </Layout>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 52px;
  max-width: 100%;
  margin-top: 60px;

`;

/*const Content = styled.div`
  max-width: 1128px; 
  margin-left: auto;
  margin-right: auto; 

`;*/

const Section = styled.section`
  min-height: 50px;
  padding: 16px 0 16px 0;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;

  h5 {
    color: #0a66c2;
    font-size: 14px;
    margin: 0;
    text-decoration: underline;
    a {
      font-weight: 700;
    }
  }

  p {
    font-size: 14px;
    color: #434649;
    font-weight: 600;
    margin: 0;
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 12px 5px;
    gap: 6px;
    text-align: center;
  }
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "leftside main rightside";
  grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(300px, 7fr);
  column-gap: 25px;
  row-gap: 25px;
  grid-template-rows: auto; 
  margin: 25px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0 5px;
    
  }

`;
const  mapStateToProps = (state) =>({
  user:state.userState.user,
})
export default connect(mapStateToProps)(Home);
