import styled from "styled-components";

export const ProductInfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 260px;
  font-weight: bold;
  text-align: left;
  padding: 10px;
`;

export const ProductSort = styled.tr`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  gap: 10px;
`;

export const ProductNameHeader = styled.th`
  text-align: left;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductNumHeader = styled.th`
  text-align: right;
  padding-right: 86px;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProductPriceHeader = styled(ProductNumHeader)`
  padding-right: 112px;
`;

export const ProductName = styled.td`
  width: 740px;
  padding: 10px;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductNum = styled.td`
  width: 740px;
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px;
  text-align: right;
  padding-left: 120px;
  padding-right: 10px;
`;

export const ProductPrice = styled.td`
  padding-left: 120px;
  text-align: right;
  color: #000;
  text-align: right;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ProductPlusMinus = styled.td`
  display: flex;
  gap: 16px;
  padding-left: 36px;
  padding-bottom: 4px;
`;
export const ProductPlus = styled.button`
  display: flex;
  width: 47px;
  height: 39px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 30px;
  background: #ffc20c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const ProductMinus = styled(ProductPlus)``;
