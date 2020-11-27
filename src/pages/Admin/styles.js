import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: #282828;

  display: flex;
  align-items: center;
  width: 100%;
`;

export const Content = styled.section`
  display: flex;
  gap: 12px;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  @media (max-width: 725px) {
    margin-top: 200px;
  }

  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
    color: var(--light-color);
  }

  table tr {
    background-color: var(--light-color);
    border: 1px solid transparent;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
  button {
    padding: 12px;
    background: var(--red-color);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    color: var(--light-color);
    font-size: 16px;
    cursor: pointer;
    margin: 0 auto;
  }
`;
