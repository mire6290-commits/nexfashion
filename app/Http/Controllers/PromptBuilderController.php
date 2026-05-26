<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Environment;
use App\Models\ModelProfile;

class PromptBuilderController extends Controller
{
    public function index()
    {
        // Mocking Moroccan Environments for the UI
        $environments = [
            ['id' => 1, 'name' => 'Casablanca Corniche', 'category' => 'Moroccan', 'lighting' => 'Golden Hour Sunset, soft warm glow'],
            ['id' => 2, 'name' => 'Maarif Café', 'category' => 'Moroccan', 'lighting' => 'Cinematic moody cafe lighting, neon reflections'],
            ['id' => 3, 'name' => 'Marrakech Riad', 'category' => 'Moroccan', 'lighting' => 'Dappled sunlight through intricate lattice, warm terracotta tones'],
            ['id' => 4, 'name' => 'Agafay Desert', 'category' => 'Moroccan', 'lighting' => 'Harsh dramatic sunlight, deep shadows, cinematic sand dunes'],
            ['id' => 5, 'name' => 'Tangier Marina', 'category' => 'Moroccan', 'lighting' => 'Cool blue Mediterranean light, sharp cinematic contrast'],
            ['id' => 6, 'name' => 'Chefchaouen', 'category' => 'Moroccan', 'lighting' => 'Diffused cool blue hour lighting, ethereal atmosphere'],
            ['id' => 7, 'name' => 'Royal Mansour', 'category' => 'Moroccan', 'lighting' => 'Luxurious warm ambient lighting, gold accents, candlelit reflections'],
            ['id' => 8, 'name' => 'Dakhla Lagoon', 'category' => 'Moroccan', 'lighting' => 'High contrast bright coastal sunlight, cinematic water reflections'],
        ];

        $shotTypes = [
            'Hero Shot',
            'Walking Shot',
            'Side Profile',
            'Close-Up Portrait',
            'Sitting Pose',
            'Motion Shot',
            'Accessory Shot',
            'Over Shoulder',
            'Wide Environment Shot',
            'Cinematic Ending Shot'
        ];

        $cameras = ['35mm Lens', '50mm Lens', '85mm Portrait Lens', 'Drone Shot', 'Cinematic Panavision', 'Polaroid', 'DSLR 8k resolution'];

        return view('prompt-builder.index', compact('environments', 'shotTypes', 'cameras'));
    }

    public function generate(Request $request)
    {
        // Extract parameters from the request
        $height = $request->input('height', '168');
        $bust = $request->input('bust', '107');
        $waist = $request->input('waist', '70');
        $hips = $request->input('hips', '117');
        $thighs = $request->input('thighs', '60');
        $environment = $request->input('environment', 'Casablanca Corniche at Sunset');
        
        // Construct the EXACT ORIGINAL Prompt (The Arch Masterclass)
        $prompt = "You are an AI image generation system.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 EXECUTION ENGINE LOCK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generate EXACTLY 10 SEPARATE images sequentially from 1 to 10.
STRICT: NO collage, NO image sheet. ONE image only each generation. Vertical 9:16.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 PRO CINEMATIC & POSING RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. THE ZOOM SYSTEM: Strictly alternate between (Zoom-Out) for wide environmental body shots, and (Zoom-In) for close-ups highlighting the dramatic curves, waistline, and fabric tension.
2. WAIST-LEVEL ANGLE: The camera MUST be positioned at waist height. This is the ultimate secret to naturally accentuating the hourglass figure.
3. THE ARCH POSTURE: Never flat. Always push the hip outward slightly with a subtle arch in the lower back.
4. THE S-CURVE STAND: Weight must always be shifted to one leg, creating a dramatic, feminine \"S\" shape.
5. RUNWAY MOVEMENT: Walking shots must capture a slow, runway-style elegance to reveal fabric ripples.
6. THE MYSTERY GAZE: For seated or candid shots, never look at the camera.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 IDENTITY & BODY LOCK (FEMALE)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FICTIONAL AI CHARACTER ONLY (Adult Moroccan woman 25+)
NOT real person. Scan uploaded reference carefully.

BODY LOCK (Hourglass - EU40-42):
- HEIGHT: {$height} cm.
- BUST: {$bust} cm. Full, firm, visibly shaping fabric.
- WAIST: {$waist} cm. Deep sharp indentation. Extremely small against hips.
- HIPS/GLUTES: {$hips} cm. Dramatically wider than waist. Very full, round backward projection. Deep shadow under seat curve.
- THIGHS: {$thighs} cm. Full, touching naturally.
- POSTURE: S-Curve always, Arch always. Natural gravity, firm curves.

HAIR & JEWELRY:
Same color, length, style. Same necklace (visible only from front).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 PRODUCTS LOCK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Use uploaded outfit EXACTLY. NO redesign. NO color change.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 ENVIRONMENT LOCK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{$environment}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 THE 10-IMAGE DYNAMIC SEQUENCE (THE ARCH MASTERCLASS)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Apply the chosen Environment above to these EXACT 10 shots. EVERY shot must feature a dramatic, aesthetic lower back arch to emphasize the hourglass figure and hip projection.

IMAGE 1
[ZOOM-OUT] The Morning Stretch Arch. Standing, reaching arms upward gracefully, chest pushed forward, deep arch in the lower back. S-Curve posture. Waist-level camera.
Finish image 1 before image 2

IMAGE 2
[ZOOM-IN] BACK VIEW ONLY. The Wall Lean Arch. Leaning upper body against a wall or window, hips pushed far back. Fabric stretching tightly over deep curves.
Finish image 2 before image 3

IMAGE 3
[ZOOM-OUT] The Floor Kneel Arch. Kneeling gracefully, leaning upper body back slightly, hips pushed forward. Hidden observer angle.
Finish image 3 before image 4

IMAGE 4
[ZOOM-IN] Side profile focus. The Walking Arch. Walking very slowly, pushing hip outward, maintaining a rigid arched lower back. Extreme waist-to-hip contrast visible.
Finish image 4 before image 5

IMAGE 5
[ZOOM-OUT] BACK VIEW ONLY. The Over-the-Shoulder Arch. Mid-stride walking away, looking back over shoulder. Deep shadow under seat curve. Waist-level angle.
Finish image 5 before image 6

IMAGE 6
[ZOOM-IN] The Lounge Arch. Lying or leaning heavily on a sofa/lounger. Upper body propped up, lower back deeply arched. Warm lighting reflecting on curves.
Finish image 6 before image 7

IMAGE 7
[ZOOM-OUT] SEATED POSE. The Edge Arch. Sitting on the edge of a seat/pool/bed, leaning far back on hands, chest lifted high to force a massive lower back arch. Mystery Gaze.
Finish image 7 before image 8

IMAGE 8
[ZOOM-IN] BACK VIEW ONLY. Hands on hips, dramatic power arch. Head turned gracefully over the shoulder. Focus on fabric draped tightly over the deep curves.
Finish image 8 before image 9

IMAGE 9
[ZOOM-OUT] The Leaning Forward Arch. Leaning forward on a railing or table, chest down, hips pushed aggressively backward to emphasize projection. Waist-level camera.
Finish image 9 before image 10

IMAGE 10
[ZOOM-IN] The Close-up Curve. Foreground framing. Extreme focus on the S-Curve from the side profile, showing the deep indentation of the waist dropping into the hips. Intense eye contact.
Finish image 10

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FINAL OUTPUT FORMAT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1 image -> finish
1 image -> finish
repeat until image 10
NO collage EVER";

        return response()->json([
            'status' => 'success',
            'prompt' => $prompt
        ]);
    }
}
