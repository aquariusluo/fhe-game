/**
 * Generate CLEAN encryption values with COPY-PASTE warnings
 * Usage: npx ts-node scripts/encrypt-clean.ts
 */

import ZamaGatewayService from "../client/src/services/zamaGateway";

async function main() {
  const gateway = new ZamaGatewayService();

  console.log("");
  console.log("╔═══════════════════════════════════════════════════════════╗");
  console.log("║     CLEAN COPY-PASTE VALUES FOR ETHERSCAN (NO SPACES!)    ║");
  console.log("╚═══════════════════════════════════════════════════════════╝");
  console.log("");

  // Encrypt reserve price
  const reserveResult = await gateway.encryptUint64(500);

  console.log("");
  console.log("┌───────────────────────────────────────────────────────────┐");
  console.log("│ STEP 1: Copy this for createAuction() goodType field      │");
  console.log("├───────────────────────────────────────────────────────────┤");
  console.log("5");
  console.log("└───────────────────────────────────────────────────────────┘");
  console.log("");

  console.log("┌───────────────────────────────────────────────────────────┐");
  console.log("│ STEP 2: Copy this for createAuction() reservePrice field  │");
  console.log("├───────────────────────────────────────────────────────────┤");
  console.log(reserveResult.handleHex);
  console.log("└───────────────────────────────────────────────────────────┘");
  console.log("");

  console.log("┌───────────────────────────────────────────────────────────┐");
  console.log("│ STEP 3: Copy this for createAuction() proof field         │");
  console.log("├───────────────────────────────────────────────────────────┤");
  console.log(reserveResult.proofHex);
  console.log("└───────────────────────────────────────────────────────────┘");
  console.log("");

  console.log("┌───────────────────────────────────────────────────────────┐");
  console.log("│ STEP 4: Copy this for createAuction() durationSeconds     │");
  console.log("├───────────────────────────────────────────────────────────┤");
  console.log("360");
  console.log("└───────────────────────────────────────────────────────────┘");
  console.log("");

  console.log("═══════════════════════════════════════════════════════════");
  console.log("");
  console.log("⚠️  CRITICAL PASTING INSTRUCTIONS:");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("");
  console.log("❌ DO NOT include:");
  console.log("   - The box borders (│ ─ ┌ ┐ └ ┘ ├ ┤)");
  console.log("   - The labels (STEP 1, STEP 2, etc)");
  console.log("   - Extra spaces or newlines");
  console.log("   - The 0x value more than once");
  console.log("");
  console.log("✅ DO include:");
  console.log("   - The 0x prefix");
  console.log("   - All hex characters exactly as shown");
  console.log("   - Nothing before or after the hex");
  console.log("");
  console.log("═══════════════════════════════════════════════════════════");
  console.log("");
  console.log("📋 ETHERSCAN FORM SHOULD LOOK LIKE:");
  console.log("");
  console.log("  goodType:       5");
  console.log(`  reservePrice:   ${reserveResult.handleHex}`);
  console.log(`  proof:          ${reserveResult.proofHex}`);
  console.log("  durationSeconds: 360");
  console.log("");
  console.log("═══════════════════════════════════════════════════════════");
}

main().catch(console.error);
