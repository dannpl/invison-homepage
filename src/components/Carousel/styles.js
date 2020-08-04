import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .carousel {
    width: 100%;

    .slider {
      display: flex !important;
      flex-direction: column;
      align-items: center;
      margin: 0px -10px;
      justify-content: center;
      width: 100%;
      color: white;

      img {
        margin: auto;
        width: 78%;
      }

      .title {
        margin-top: 30px;
        font-size: ${(props) => props.theme.largeFont};
      }

      .description {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
        max-width: 65%;
        font-size: 20px;
      }
    }

    .carousel-dots li {
      width: 12px;
    }

    .carousel-dots li.carousel-dots-active button:before {
      color: white;
    }

    .carousel-dots li button:before {
      color: white;
    }
  }
`;
