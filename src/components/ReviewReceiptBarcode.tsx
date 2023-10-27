import { Barcode } from "../emotion/styles";
import { useEffect, useState } from "react";
import JsBarcode from 'jsbarcode'

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
  const [imageUrl, setImageUrl] = useState<string>()

  const timestamp = new Date(createDate).getTime() / 1000;
  const barcodeNum = `${reviewId}${reviewType}${timestamp}`

  useEffect(() => {
    const canvas = document.createElement('canvas')
    JsBarcode(
      canvas, 
      barcodeNum, 
      { height: 60, 
        font: 'ND'}
    )
    setImageUrl(canvas.toDataURL('image/png'))
  }, [])


  return (
    <Barcode>
      {
        imageUrl &&
        <img
            src={imageUrl}
            alt={barcodeNum}
            crossOrigin="anonymous"
        />
      }
    </Barcode>
  );
};

export default ReviewReceiptBarcode;
