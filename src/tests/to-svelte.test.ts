import { toSvelte } from "../to-svelte";
import * as test from "tape";

test("toSvelte", (t) => {
  const { props, children } = toSvelte(
    `<svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9zm1-2h4V7h-4v2zm10 4a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6zm-5 9h4v-2h-4v2zm-5-9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h6zm-5 9h4v-2H5v2z" fill="#767676" fill-rule="evenodd"/>
    </svg>`
  );

  t.ok(
    props.includes('width="24" height="24" xmlns="http://www.w3.org/2000/svg"')
  );
  t.ok(children.length > 0);
  t.end();
});
