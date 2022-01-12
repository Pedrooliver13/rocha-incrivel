import styled from 'styled-components';

export const Wrapper = styled.section`
  .content {
    display: flex;
    flex-direction: column;
    min-height: 40rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    &--title {
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-size: 2rem;
      font-weight: bold;
      padding: 2rem 1rem;
    }

    &--items {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }
  }
`;
