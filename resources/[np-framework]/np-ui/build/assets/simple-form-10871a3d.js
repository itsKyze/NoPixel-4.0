var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {
  enumerable: true,
  configurable: true,
  writable: true,
  value
}) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { R as _0xae15b0, j as _0xf1f4db, n as _0x132c1d } from "./vendor-69ed8822.js";
import { I as _0x57c868 } from "./index-dcb6474f.js";
import { T as _0x10aace } from "./text-2b84715a.js";
const container = "_container_mwa59_1";
const validation_messages = "_validation_messages_mwa59_13";
const message = "_message_mwa59_19";
const actions = "_actions_mwa59_33";
const btn = "_btn_mwa59_38";
const red = "_red_mwa59_50";
const green = "_green_mwa59_57";
const styles = {
  container,
  "input-wrapper": "_input-wrapper_mwa59_4",
  validation_messages,
  message,
  actions,
  btn,
  red,
  green
};
const validations = {
  text: {
    fn: param_1 => !!param_1 && param_1.length > 0,
    message: "must be at least 1 character"
  },
  number: {
    fn: param_1 => Number(param_1) > 0,
    message: "must be a valid number"
  },
  phone: {
    fn: param_1 => !!param_1 && param_1.toString().replace(/[^0-9]+/g, "").substring(0, 10).length === 10,
    message: "must be 10 numbers"
  }
};
class SimpleForm extends _0xae15b0.Component {
  constructor(param_1) {
    super(param_1);
    __publicField(this, "validate", () => {
      const varData_1 = [];
      let isEnabled = true;
      this.props.elements.filter(param_1_1 => !!param_1_1.validate).forEach(({
        name: _0x2bc89f,
        validate: _0x76aab8
      }) => {
        const {
          fn: _0x1f7d2b,
          message: _0x15f876
        } = Array.isArray(_0x76aab8) ? {
          ...validations[_0x76aab8[0]],
          message: _0x76aab8[1] + " " + validations[_0x76aab8[0]].message
        } : {
          ..._0x76aab8
        };
        if (!_0x1f7d2b(this.state.values[_0x2bc89f], this.state.values)) {
          isEnabled = false;
          varData_1.push(_0x15f876);
        }
      });
      this.setState({
        messages: varData_1
      });
      return isEnabled;
    });
    const varData_2 = param_1.defaultValues || {};
    this.state = {
      messages: [],
      values: {
        ...varData_2
      }
    };
  }
  onChange(param_1, param_2) {
    this.setState(param_1_1 => ({
      ...param_1_1,
      values: {
        ...param_1_1.values,
        [param_1]: param_2
      }
    }));
  }
  render() {
    return <div className={styles.container}>{this.props.elements.map((param_1, param_2) => Array.isArray(param_1) ? <div className="flex-row" key={param_1[0].name}>{param_1.map(param_1_1 => <div className="flex" key={param_1_1.name}>{param_1_1.render({
            onChange: param_1_2 => this.onChange(param_1_1.name, param_1_2),
            value: this.state.values[param_1_1.name],
            values: this.state.values
          })}</div>)}</div> : <div key={param_1.name}>{_0xae15b0.cloneElement(param_1.render({
          onChange: param_1_1 => this.onChange(param_1.name, param_1_1),
          value: this.state.values[param_1.name],
          values: this.state.values
        }), {
          autoFocus: param_2 === 0
        })}</div>)}{this.state.messages.length > 0 && <div className={styles.validation_messages}>{this.state.messages.map((param_1, param_2) => <div className={styles.message} key={param_2}><_0x57c868 icon="exclamation" size="1x" /><_0x10aace variant="body2">{param_1}</_0x10aace></div>)}</div>}<div className={styles.actions}><button className={_0x132c1d(styles.btn, styles.red)} onClick={this.props.onCancel}>Cancel</button><button className={_0x132c1d(styles.btn, styles.green)} onClick={() => {
          if (this.validate()) {
            this.props.onSubmit(this.state.values);
          }
        }}>{this.props.submitButtonValue ?? "Submit"}</button></div></div>;
  }
}
export { SimpleForm as S };