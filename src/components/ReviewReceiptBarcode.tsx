import { Barcode } from "../emotion/styles";

const ReviewReceiptBarcode = () => {
  // SRC: https://barcode.tec-it.com/

  return (
    <Barcode>
      {/* insert your custom barcode setting your data in the GET parameter "data" */}
      <img
        alt="Barcode Generator TEC-IT"
        src="https://barcode.tec-it.com/barcode.ashx?data=1230-5ABC-BRTS3&code=&translate-esc=true"
      />
    </Barcode>
  );
};

export default ReviewReceiptBarcode;
