"use client";
import React, { useEffect } from "react";
import styles2 from "../styles/sellerConfirm.module.css";
import styles from "../styles/sellerHome.module.css";
import InputCustom from "./InputCustom";
import Image from "next/image";
import x from "../../assets/🦆 icon _close circle_.svg";
import y from "../../assets/🦆 icon _tick circle_.svg";
import { useDispatch } from "react-redux";
import { setPaymentsList } from "@/store/slices/paymentsList.slice";

const ChoosePaymentMethod = ({ set, total, operatorsList }) => {
  const [isCredit, setIsCredit] = React.useState();
  const [paymentType, setPaymentType] = React.useState();
  const [currency, setCurrency] = React.useState();
  const [amount, setAmount] = React.useState(total);
  const [operator, setOperator] = React.useState();
  const dispatch = useDispatch();
  const [show, setShow] = React.useState(true);

  if (!show) return null;

  return (
    <div className={`${styles2.thead} ${styles2.divInputsPayment}`}>
      <InputCustom
        className={styles2.element}
        placeholder="De contado o Credito"
        options={[
          {
            id: 1,
            label: "De contado",
            value: false,
          },
          {
            id: 2,
            label: "Credito",
            value: true,
          },
        ]}
        value={isCredit}
        set={setIsCredit}
      />
      {isCredit?.value == false && (
        <>
          <InputCustom
            className={styles2.element}
            placeholder="Tipo de Pago"
            options={[
              {
                id: 1,
                label: "Efectivo",
                value: "Efectivo",
              },
              {
                id: 2,
                label: "Tarjeta",
                value: "Tarjeta",
              },
              {
                id: 3,
                label: "Transferencia",
                value: "Transferencia",
              },
            ]}
            value={paymentType}
            set={setPaymentType}
          />
          <InputCustom
            className={styles2.element}
            placeholder="Moneda de Pago"
            options={[
              {
                id: 1,
                label: "CLP",
                value: "CLP",
              },
              {
                id: 2,
                label: "USD",
                value: "USD",
              },
            ]}
            value={currency}
            set={setCurrency}
          />
          <input
            className={`${styles.inputText} ${styles2.element}`}
            placeholder="100,000 CLP"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Image
            onClick={() => setShow(!show)}
            style={{ cursor: "pointer" }}
            src={x}
            alt=""
          />
          <Image
            onClick={() => {
              dispatch(
                setPaymentsList({
                  isCredit: isCredit.value,
                  paymentType: paymentType.value,
                  currency: currency.value,
                  amount,
                })
              );
              setShow(!show);
              set([""]);
            }}
            style={{ cursor: "pointer" }}
            src={y}
            alt=""
          />
        </>
      )}
      {isCredit?.value == true && (
        <>
          <InputCustom
            className={styles2.element}
            placeholder="Operador"
            options={operatorsList}
            value={operator}
            set={setOperator}
          />
          <Image
            onClick={() => setShow(!show)}
            style={{ cursor: "pointer" }}
            src={x}
            alt=""
          />
          <Image
            onClick={() => {
              dispatch(
                setPaymentsList({
                  isCredit: isCredit?.value,
                  paymentType: paymentType?.value
                    ? paymentType?.value
                    : "Credito",
                  currency: currency?.value ? currency?.value : "CLP",
                  operator: operator?.name,
                  amount,
                })
              );
              setShow(!show);
              set([""]);
            }}
            style={{ cursor: "pointer" }}
            src={y}
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default ChoosePaymentMethod;
