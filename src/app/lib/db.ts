import { sql } from "@vercel/postgres";

export async function GetCvNavs() {
  const { rows } = await sql`SELECT * from cv_navbar`;
  return rows;
}

// export async function getOtherData() {
//   const { rows } = await sql`SELECT * from other_table`;
//   return rows;
// }


