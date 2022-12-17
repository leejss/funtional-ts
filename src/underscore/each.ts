import bloop from "./bloop";
import identity from "./identity";
import noop from "./noop";

const each = bloop(identity, noop);
export default each;
