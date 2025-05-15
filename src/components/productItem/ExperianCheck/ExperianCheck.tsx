import {useState} from "react";
import "./ExperianCheck.css";

const ExperianCheck = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    setResult("");

    try {
      const response = await fetch(
        "https://usa.experian.com/api/securelogin/retrieve/username",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            trustId: "",
            ssn: "035570531",
            dob: "1997-08-22",
            jsc: "c8a44j1ZclY5BNvcKyAdMUDFBpBeA0fUm0NUbNiqUU8jA2Q3wL6k03x0.5EwHXXTSHCSPmtd0wVYPIG_qvoPfybYb5EvYTrYesRK7ASirvLG9mhORoVidPZW2AUMnGWVQdsBL6yXyjaY1WMsiZRPrwVL6tqAhbrmQmxfNbcEJ3Us_43wuZPup_nH2t05oaYAhrcpMxE6DBUr5xj6KkseFLwtHkdnv8xf7_OLgiPFMtrs1OeyjaY2Hn_bl0ctOOSySI6KUMnGWpwoNSUC56MnGWVQdgFCoq1mW_9Z1ikK8CSKk6Hb9LarUqUdHz16rgPudI9iJdZY6SGfs1eNk4ug5D9ZtJ9YQjJzIpU_2vqCSFQe_BetHkajVK9OKw6PJNljOw9wbqsvsqg_RERLsBeiTyUNp9SMDy2lLATf9.NlrJJNlY6AabCKvnJwrTKElgbrpFeCtHjoaU_2zI5a5CWJA0Gr0pKoIxFB.DS5.BhMAVuxHL07Oznh_Ane1MfSMQXNPbOCvkY2TwGwuKnnt.jrkRGrTAxw63O5aYyILZyzdQmcrvK5U.a6t391hLdTSZ1EwyqQtJVIEX_yhOMYAoEoBfl_u6SwyIEX_Yr87gq4WZ0O9VA49eqwiyRgJdygJdljQlpQJu_X_Q_X_Kj5qSd9lHbulHXd.gJdOAEhmmK.L9KKhtSwtNdIxNdMIYYdtvr5xj6KlNdLtNdKQlhbPHgJdygJceFA49LHnvRg_F4X_KQTMUDL9JzL9JyNkOl2Z0jAjbA49rA49fTCgvHKX_EpX_SimlH_ZgyL5bpmd0RL6tqAhatTpjCW0uVjReFLwtHkdnv8i.CpWZ0O9VA49eqwiyRgJdygJdljQlpQJu_X_Q_X_Kj5qSd9lHbulHXd0Qn_A1bEg_NdHmLUQ_Ze.gJefQmvtmlHbulHib66InriCvTDfXlHhmlHerYQDo_NdIxNdGJVhtm_WIbqHgJdOAEhmmK.L9KKhtSwtNdIxNdItY0b3DF5wiyRgJfRgJehsqnh8L9JzL9KqvLvShNdHmLUA2IuuKXVFCowr1zUcfbrRAxyXiUSoDUNmlFCLH2Vmoz4XOwZdZVLkvjcger92XlF4XVGhaLUbvTDfuXDCBuUhmN4XV4gzm0pm1edJbO0B2VOzptDbRbwED5IEkKTMBuXDCBuUhmNByzZ6m61DCBsJr8VYf4.WL9.MCG_XV.v0vA4.Kq9KNc5jaYZtNc5jaYZtNc0HdWL9.dMLKNc1fP_XVRvw0Bpitrf4.bSTHni0us8r9gD.ELMfVv.eua2hmfunw4MJWuxZtcspBZUrsgkMfs.B5B",
            clientId: "experian",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="experian-check-section">
      <div className="container">
        <button
          className="experian-check-button"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Checking..." : "Check Experian"}
        </button>

        {error && <div className="experian-error">Error: {error}</div>}

        {result && <pre className="experian-result">{result}</pre>}
      </div>
    </section>
  );
};

export default ExperianCheck;
