import React from "react";
import { Redirect } from "react-router-dom";

export default function HomePage() {
    const user = "củ lozz";

    return user === null ? <Redirect to="/login" /> : <div>HomePage</div>;
}
