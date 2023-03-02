import { Barcode } from "../emotion/styles";
import { useEffect } from "react";

interface ReviewReceiptBarcodeProps {
  reviewId: number,
  reviewType: string, 
  createDate: Date
}

const ReviewReceiptBarcode = ({
  reviewId,
  reviewType,
  createDate
}: ReviewReceiptBarcodeProps) => {
  // SRC: https://barcode.tec-it.com/

  const timestamp = new Date(createDate).getTime() / 1000;
  const data = `${reviewId}-${reviewType}-${timestamp}`

  // useEffect(() => {
  //   const receiptBarcodeSrc = `https://barcode.tec-it.com/barcode.ashx?data=${data}&code=&translate-esc=true`
  //   const options = {
  //     headers: {
  //       'Access-Control-Allow-Origin': '*'
  //     }
  //   }
  // }, [])


  return (
    <Barcode>
      {/* insert your custom barcode setting your data in the GET parameter "data" */}
      <img
        alt="Barcode Generator TEC-IT"
        src={`https://barcode.tec-it.com/barcode.ashx?data=${data}&code=&translate-esc=true`}
        crossOrigin="anonymous"
      />
    </Barcode>
  );
};

export default ReviewReceiptBarcode;
