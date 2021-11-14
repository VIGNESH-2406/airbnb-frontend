import { SyncOutlined } from "@ant-design/icons";

const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
}) => (
  <form onSubmit={handleSubmit}>
    {page !== "login" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted">Your name</label>
        </small>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>
    )}

    <div className="form-group p-2">
      <small>
        <label className="text-muted">Email Address</label>
      </small>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="Email Address"
        className="form-control"
        placeholder="Enter Email"
      />
    </div>

    <div className="form-group p-2">
      <label className="text-muted">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="Password"
        className="form-control"
        placeholder="Enter a password"
      />
    </div>

    {page !== "login" && (
      <>
        <div className="form-group p-2">
          <small>
            <label className="text-muted"> Pick a question</label>
          </small>
          <select className="form-control">
            <option>what is your favourite colour?</option>
            <option>whats yur best friends name?</option>
            <option>what city were you born?</option>
          </select>

          <small className="form-text text-muted">
            you can use this to reset your password if forgotten
          </small>
        </div>

        <div className="form-group p-2">
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="text"
            className="form-group "
            placeholder="write your answer"
          />
        </div>
      </>
    )}

    <div className="form-group p- 2">
      <button
        disabled={
          page === "login"
            ? !email || !password
            : !name || !email || !secret || !password
        }
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin className="py-1" /> : "submit"}
      </button>
    </div>
  </form>
);

export default AuthForm;
