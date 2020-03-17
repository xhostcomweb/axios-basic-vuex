<input v-model="message">
export function mapFields(options) {
  const object = {};
  for (let x = 0; x < options.fields.length; x++) {
    const field = [options.fields[x]];
    object[field] = {
      get() {
        return this.$store.state[options.base][field];
      },
      set(value) {
        this.$store.commit(options.mutation, { [field]: value });
      }
    };
  }
  return object;
}
import { mapFields } from "@/helpers.js"
export default {
  computed: {
    ...mapFields({
    fields: ["name", "email", "street", "zipcode"],
    base: "user",
    mutation: "UPDATE_USER"
    }),
    handleSubmit(e){
    e.preventDefault();
    mapFields(e)
    }
