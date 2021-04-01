import React from "react";
import { toast } from "react-toastify";
import Form from "../common/Form";
import ShippingDetail from "./ShippingDetail";
import ShippingForm from "./ShippingForm";
import Payment from "./Payment";
import PreloaderWrap from "../common/PreloaderWrap";
import { auth, db } from "../../firebase";

export class Shipping extends Form {
  state = {
    data: {
      name: "",
      email: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
      country: "",
      phonenumber: "",
    },
    errors: {},
    shippingStatusIsLoading: true,
    isSubmitted: false,
    isSubscribed: true,
    isLoading: false,
  };

  async componentDidMount() {
    if (this.state.isSubscribed) {
      try {
        const querySnapshot = await db
          .collection("users")
          .doc(auth.currentUser?.uid)
          .collection("orders")
          .get();

        const docsLength = querySnapshot.docs.length;

        if (docsLength) {
          const docRef = db.collection("users").doc(auth.currentUser.uid);
          const doc = await docRef.get();
          const data = doc.data();

          this.setState({
            data,
            isSubmitted: true,
            shippingStatusIsLoading: false,
          });
        } else {
          const data = { ...this.state.data };

          const docRef = db.collection("users").doc(auth.currentUser.uid);
          const doc = await docRef.get();

          data.name = doc.data().name;
          data.email = doc.data().email;

          this.setState({
            data,
            shippingStatusIsLoading: false,
          });
        }
      } catch (e) {
        toast.error("An unexpected error occurred.");
      }
    }
  }

  componentWillUnmount() {
    this.setState({
      isSubscribed: false,
    });
  }

  doSubmit = async () => {
    try {
      this.setState({ isLoading: true });
      await db
        .collection("users")
        .doc(auth.currentUser.uid)
        .update({ ...this.state.data });

      this.setState({ isSubmitted: true, isLoading: false });
    } catch (e) {
      toast.error("An unexpected error occurred.");
      this.setState({ isLoading: false });
    }
  };

  handleClick = () => {
    this.setState({ isSubmitted: false });
  };

  render() {
    const {
      isSubmitted,
      data,
      isLoading,
      shippingStatusIsLoading,
    } = this.state;

    return (
      <section className="shipping">
        {shippingStatusIsLoading ? (
          <PreloaderWrap />
        ) : (
          <>
            {isSubmitted ? (
              <ShippingDetail data={data} handleClick={this.handleClick} />
            ) : (
              <ShippingForm
                renderFormTitle={this.renderFormTitle}
                renderInput={this.renderInput}
                renderCountrySelect={this.renderCountrySelect}
                renderSubmitBotton={this.renderSubmitBotton}
                handleSubmit={this.handleSubmit}
                isLoading={isLoading}
              />
            )}
          </>
        )}

        {isSubmitted && <Payment data={data} />}
      </section>
    );
  }
}

export default Shipping;
