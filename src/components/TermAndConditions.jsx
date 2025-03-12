import React from "react";

const TermAndConditions = () => {
  return (
    <div class="container mx-auto p-4">
      <h1 class="text-2xl font-semibold mb-4">Terms & Conditions</h1>
      <p class="mb-4">
        By using our website or making a purchase, you agree to the following
        terms and conditions. Please read them carefully.
      </p>

      <h2 class="text-xl font-semibold">Use of Website</h2>
      <p class="mb-4">
        You must be 18 years or older to use our website. By accessing our
        services, you agree to abide by all applicable laws and regulations.
      </p>

      <h2 class="text-xl font-semibold">Order & Payment</h2>
      <p class="mb-4">
        All orders placed on our website are subject to availability. Payment
        must be made in full at the time of purchase.
      </p>

      <h2 class="text-xl font-semibold">Refund & Cancellation</h2>
      <p class="mb-4">
        Please refer to our{" "}
        <a href="/cancellation-policy" class="text-blue-500">
          Cancellation & Refund Policy
        </a>{" "}
        for more details.
      </p>
    </div>
  );
};

export default TermAndConditions;
