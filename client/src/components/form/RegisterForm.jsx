export function RegisterForm() {
  return (
    <form className="col-12 col-md-10 col-lg-6 col-xl-5 col-xxl-4">
      <div className="form-floating">
        <input id="email" type="email" className="form-control" placeholder="name@example.com" required />
        <label htmlFor="email">Email address</label>
      </div>
      <div className="form-floating">
        <input id="password" type="password" className="form-control" placeholder="Password" required />
        <label htmlFor="password">Password</label>
      </div>
      <div className="form-check text-start my-3">
        <input className="form-check-input" type="checkbox" value="tos" id="tos" required />
        <label className="form-check-label" htmlFor="tos">
          Agree with Terms of Service
        </label>
      </div>
      <button className="btn btn-primary w-100 py-2" type="submit">
        Register
      </button>
    </form>
  );
}
