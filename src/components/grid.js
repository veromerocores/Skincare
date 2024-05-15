import * as React from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';

const heights = [30];

const StyledAccordion = styled(Accordion)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  color: theme.palette.text.secondary,
}));

export default function ImageMasonry() {
  return (
    <Box sx={{ width: 900, minHeight: 829 }}>
      <Masonry columns={2} spacing={5} className='myGrid'>
        {itemData.map((item, index) => (
          <div key={index}>
            <StyledAccordion sx={{ minHeight: heights[index] }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>{item.content}</AccordionDetails>
            </StyledAccordion>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
    </Box>
  );
}


const itemData = [
  {
    img: '../assets/images/warrior.png',
    title: 'Warrior',
    content: 
    "The Warrior II pose, or Virabhadrasana II, is a foundational posture in yoga that embodies strength, stability, and groundedness. To perform Warrior II, begin in a standing position, then step one foot back, extending the arms parallel to the floor, with the front knee bent at a 90-degree angle and the back leg straightened. The torso rotates towards the front, shoulders relaxed, and gaze directed over the front fingertips. This pose cultivates physical strength in the legs, arms, and core while promoting mental focus and resilience. Symbolically, Warrior II represents courage, determination, and a warrior's readiness to face life's challenges with unwavering strength and a steady heart. As we hold this posture, we embody the spirit of a warrior, standing tall and firm in our truth, ready to confront obstacles with grace and resolve",
  },
  {
    img: '../assets/images/caterpillar.png',
    title: 'Caterpillar',
    content: "The Caterpillar Pose, or Paschimottanasana, is a rejuvenating yoga posture that encourages deep stretching and relaxation. To practice the Caterpillar Pose, begin by sitting on the floor with your legs extended in front of you. Inhale deeply, lengthening the spine, then exhale as you slowly hinge forward at the hips, reaching your hands towards your feet or ankles. Allow your torso to fold over your legs, relaxing the neck and shoulders. Keep the spine straight and avoid rounding the back excessively. This pose gently stretches the spine, hamstrings, and lower back, promoting flexibility and releasing tension stored in these areas. Symbolically, the Caterpillar Pose embodies introspection, surrender, and the ability to let go of physical and emotional stress. As we surrender into this pose, we embrace the process of transformation, shedding layers of tension and finding peace within ourselves."
  },
  {
    img: '../assets/images/tuangel_forward.png',
    title: 'Tuangel Forward',
    content: "The Triangle Forward Bend, or Uttanasana, is a revitalizing yoga posture that promotes both physical and mental well-being. To perform the Triangle Forward Bend, stand with your feet hip-width apart and hinge forward at the hips, keeping your back straight. Allow your hands to reach towards the ground or grasp your ankles, depending on your flexibility. Engage your core muscles and relax your neck, allowing your head to hang heavy. Feel the stretch along the back of your legs and spine as you breathe deeply into the pose. The Triangle Forward Bend stretches the hamstrings, calves, and spine, while also calming the mind and relieving stress. Symbolically, this pose represents surrender and release, as we let go of tension and embrace a sense of grounding and stability. It encourages us to connect with the earth beneath us and find balance both physically and emotionally.",
  },
  {
    img: '../assets/images/downward_dog.png',
    title: 'Downward Dog',
    content: "The Downward Facing Dog, or Adho Mukha Svanasana, is a foundational yoga pose that offers a myriad of benefits for the body and mind. To practice the Downward Dog, start on your hands and knees with your wrists aligned under your shoulders and your knees under your hips. Spread your fingers wide and press firmly into the mat as you lift your hips up and back, straightening your arms and legs to form an inverted V shape. Press your heels toward the ground while keeping your spine long and your head relaxed between your arms. Take deep breaths, focusing on lengthening your spine and opening up the back of your body. The Downward Dog strengthens the arms, shoulders, and legs, while also stretching the hamstrings, calves, and spine. It also helps to calm the mind, improve circulation, and relieve stress and anxiety. Symbolically, this pose represents a moment of introspection and surrender, as we connect with the earth and find stability and peace within ourselves. It encourages us to let go of tension and find a sense of grounding amidst life's challenges.",
  },
  {
    img: '../assets/images/cobra.png',
    title: 'Cobra',
    content: "The Cobra Pose, or Bhujangasana, is a rejuvenating yoga posture that embodies vitality and resilience. To perform the Cobra Pose, lie face down on your mat with your legs extended and the tops of your feet pressing into the ground. Place your hands directly under your shoulders, fingers spread wide and elbows tucked close to your sides. Inhale deeply as you engage your back muscles and lift your chest off the mat, keeping your gaze forward and your shoulders relaxed away from your ears. Press firmly into your hands to lift your torso higher, while maintaining a gentle curve in your lower back. Take slow, steady breaths as you hold the pose, feeling a stretch through the front of your body and a strengthening sensation in your back muscles. The Cobra Pose strengthens the spine, opens the chest and shoulders, and improves flexibility in the spine and abdomen. It also stimulates the abdominal organs, promoting digestion and relieving stress. Symbolically, this pose represents resilience and transformation, as we rise up from the ground and embrace our inner strength. It encourages us to cultivate courage and adaptability in the face of adversity, reminding us that we have the power to overcome challenges and emerge stronger than before.",
  },
  {
    img: '../assets/images/corpse.png',
    title: 'Corpse',
    content: "The Corpse Pose, or Savasana, is a deeply restorative yoga posture that encourages relaxation and mindfulness. To practice Savasana, lie flat on your back with your legs extended and your arms resting comfortably by your sides, palms facing up. Close your eyes gently and allow your body to completely relax into the mat, releasing any tension from your muscles and letting go of any thoughts or distractions. Take slow, deep breaths, allowing your belly to rise and fall naturally with each inhale and exhale. As you surrender to the present moment, feel the weight of your body sinking into the earth, supported and grounded. Savasana provides an opportunity to rest and rejuvenate both the body and mind, promoting a sense of peace and tranquility. It allows for integration and assimilation of the benefits of your yoga practice, helping to reduce stress, improve sleep quality, and enhance overall well-being. Symbolically, the Corpse Pose represents surrender and acceptance, reminding us to let go of the past and the future, and to fully embrace the present moment with openness and awareness. It teaches us the importance of allowing ourselves to rest and restore, so that we may awaken refreshed and renewed, ready to face whatever lies ahead with clarity and calmness.",
  },
  {
    img: '../assets/images/plank.png',
    title: 'Plank',
    content: "The Plank Pose is a foundational yoga posture that builds strength and stability throughout the entire body. To practice the Plank Pose, begin in a push-up position with your hands shoulder-width apart and your wrists aligned under your shoulders. Extend your legs straight back, engaging your core muscles to create a straight line from your head to your heels. Keep your body parallel to the ground, avoiding any sagging or arching in the lower back. Press firmly into your palms and fingertips, activating the muscles in your arms, shoulders, and upper back. Draw your navel in towards your spine to support your lower back and prevent your hips from sagging. Maintain steady, even breathing as you hold the pose for several breaths or longer, depending on your strength and endurance. The Plank Pose strengthens the core, arms, shoulders, and legs, while also improving posture and balance. It tones the abdominal muscles, enhances spinal alignment, and cultivates mental focus and determination. Symbolically, the Plank Pose represents stability, resilience, and inner strength. It teaches us to remain steady and grounded, even in the face of challenges or adversity, and to cultivate the physical and mental fortitude needed to navigate life's ups and downs with grace and poise.",
  },
  {
    img: '../assets/images/easy_sit.png',
    title: 'Easy Sit',
    content: "The Easy Seated Pose, also known as Sukhasana, is a foundational yoga posture that promotes relaxation, grounding, and introspection. To practice the Easy Seated Pose, sit on the floor with your legs crossed comfortably in front of you. Rest your hands on your knees or thighs with your palms facing down or up, depending on your preference. Keep your spine tall and straight, lengthening upward from the base of your pelvis to the crown of your head. Close your eyes or soften your gaze, allowing your breath to flow naturally and effortlessly. Relax your facial muscles and soften your jaw, releasing any tension or tightness. With each inhale, feel your spine lengthen and your chest expand. With each exhale, feel your body settle and relax further into the pose. The Easy Seated Pose is a gentle stretch for the hips, knees, and ankles, making it ideal for beginners or those with limited flexibility. It calms the mind, relieves stress, and promotes a sense of inner peace and tranquility. Symbolically, the Easy Seated Pose represents stability, comfort, and contentment. It encourages us to find ease and presence in the present moment, embracing simplicity and stillness as we connect with our innermost selves.",
  },
  {
    img: '../assets/images/bridge_pose.png',
    title: 'Bridge',
    content: "The Bridge Pose, or Setu Bandhasana, is a rejuvenating yoga posture that offers a blend of strength and flexibility benefits. To practice the Bridge Pose, lie on your back with your knees bent and feet hip-width apart, flat on the floor. Keep your arms alongside your body with palms facing down. Press your feet firmly into the ground as you lift your hips upward toward the ceiling. Engage your glutes and thighs to support the lift, and roll your shoulders underneath you to create space in the chest. Optionally, you can clasp your hands together beneath your pelvis for added support. Keep your neck relaxed and gaze straight ahead or slightly upward. Hold the pose for several breaths, focusing on deep, steady inhalations and exhalations. With each breath, feel your chest expanding and your spine lengthening. The Bridge Pose strengthens the back, buttocks, and legs while also stretching the chest, neck, and spine. It stimulates the abdominal organs and thyroid gland, improving digestion and metabolism. Symbolically, the Bridge Pose represents connection, balance, and stability. It invites us to bridge the gap between body and mind, finding harmony and alignment within ourselves. As we lift our hips toward the sky, we also lift our spirits, fostering a sense of upliftment and empowerment.",
  },
  {
    img: '../assets/images/plough.png',
    title: 'Plough',
    content: "The Plough Pose, or Halasana, is an invigorating yoga posture that combines deep stretching with spinal alignment. To practice the Plough Pose, lie on your back with your arms alongside your body and palms facing down. Inhale deeply as you lift your legs upward toward the sky, using your abdominal muscles to support the movement. Exhale as you slowly lower your legs behind your head, aiming to touch your toes to the floor behind you. Keep your legs straight and your feet flexed, engaging your core to maintain stability. You can support your lower back with your hands or interlace your fingers behind your back, extending your arms along the floor. Hold the pose for several breaths, allowing your spine to lengthen and your shoulders to relax. Feel the stretch along the entire length of your spine and the back of your neck. The Plough Pose stimulates the thyroid gland and improves circulation to the brain, promoting mental clarity and focus. It also stretches the shoulders, hamstrings, and spine, relieving tension and stiffness. Symbolically, the Plough Pose represents introspection and surrender. As we fold inward, we cultivate a sense of inner peace and release, letting go of worries and distractions. The pose encourages us to trust in our ability to navigate life's challenges with grace and ease, finding strength in vulnerability.",
  },
  {
    img: '../assets/images/lord_of_the_dance.png',
    title: 'Lord Of The Dance',
    content: "The Lord of the Dance Pose, or Natarajasana, is a dynamic yoga posture that embodies balance, strength, and grace. To perform this pose, start in a standing position with your feet hip-width apart. Shift your weight onto your right foot and bend your left knee, bringing your heel toward your glute. Reach your left hand back and grasp the inside of your left foot or ankle. As you inhale, extend your right arm forward and up toward the sky, lengthening your spine. With control, begin to kick your left foot into your hand, lifting your chest and kicking your foot away from your body. Engage your core to stabilize your balance as you tilt your torso forward, extending your right leg straight behind you. Keep your gaze steady and find a focal point to help maintain your balance. Hold the pose for several breaths, feeling the stretch in the front of your thigh and the opening of your chest. The Lord of the Dance Pose cultivates focus, concentration, and determination, qualities represented by the Hindu deity Shiva in his cosmic dance of creation and destruction. As you embody the Lord of the Dance, you connect with your inner strength and poise, embracing the fluidity of life's movements with grace and ease.",
  },
  {
    img: '../assets/images/handstand.png',
    title: 'Handstand',
    content: "The Handstand, or Adho Mukha Vrksasana, is an advanced yoga pose that requires strength, balance, and concentration. Begin by coming into a downward-facing dog pose with your hands shoulder-width apart and your feet hip-width apart. Walk your feet closer to your hands, shifting your weight forward onto your hands and shoulders. Lift one leg into the air, engaging your core and pressing firmly through your palms. With control, kick your other leg up, using the momentum to lift your hips and legs overhead. Keep your arms straight and strong, pressing into the ground to lift your body fully upside down. Find balance by engaging your core muscles and stacking your hips over your shoulders. Keep your gaze focused between your hands or slightly forward to help maintain your balance. Hold the pose for several breaths, feeling the strength and stability radiate through your entire body. The Handstand represents courage, confidence, and overcoming fear. As you practice this pose, you cultivate a sense of empowerment and inner strength, both physically and mentally. Embrace the challenge of the Handstand with determination and patience, trusting in your ability to rise above obstacles and find balance in the face of adversity.",
  },
  {
    img: '../assets/images/bakasana.png',
    title: 'Bakasana',
    content: "Bakasana, also known as Crow Pose, is an invigorating arm balance that combines strength, balance, and focus. Start in a squatting position with your feet hip-width apart, planting your palms firmly on the ground shoulder-width apart. Keep your fingers spread wide for stability. Bend your elbows slightly and lean forward, shifting your weight onto your hands. Lift your hips high and draw your knees toward your upper arms, coming onto the balls of your feet. Engage your core muscles and gaze slightly forward to maintain balance. Slowly begin to shift your weight forward, lifting your feet off the ground. Press firmly through your hands to lift your body, finding balance on your hands. Keep your elbows bent and hug your knees into your upper arms to support your weight. Hold the pose for several breaths, feeling the strength and stability in your arms and core. Bakasana symbolizes courage, determination, and focus. As you practice this pose, you cultivate a sense of inner strength and confidence, learning to trust in your ability to overcome challenges. Embrace the journey of Bakasana with patience and persistence, honoring the balance between effort and surrender.",
  },
  {
    img: '../assets/images/maurasana.png',
    title: 'Maurasana',
    content: "Maurasana, commonly referred to as Child's Pose, is a gentle and restorative yoga posture that promotes relaxation and introspection. Begin by kneeling on the floor with your big toes touching and your knees spread apart. Sit back on your heels, then exhale as you fold forward, bringing your forehead to rest on the mat. Extend your arms forward or alongside your body, palms facing up, allowing your chest to sink toward the ground. Relax your shoulders, neck, and jaw, and focus on deepening your breath. Maurasana represents surrender and release, inviting you to let go of tension and stress, both physically and mentally. As you surrender into the pose, you create space for introspection and inner peace, nurturing a sense of calm and tranquility within. Embrace Maurasana as a sanctuary for rest and rejuvenation, honoring your body's need for stillness and self-care.",
  },
  {
    img: '../assets/images/sarvangasana.png',
    title: 'Sarvangasana',
    content: "Sarvangasana, or Shoulder Stand, is a foundational yoga inversion that offers numerous physical and mental benefits. Begin by lying on your back with your arms alongside your body, palms facing down. Engage your core muscles as you lift your legs and hips off the ground, supporting your lower back with your hands. Extend your legs upward toward the ceiling, keeping them straight and energized. Press your elbows into the floor and lift your chest toward your chin, creating a straight line from your shoulders to your hips. Sarvangasana symbolizes strength, stability, and balance. As you hold the pose, you cultivate a sense of inner resilience and equanimity, confronting challenges with poise and grace. The inversion also stimulates the thyroid and parathyroid glands, promoting hormonal balance and rejuvenating the entire body. Embrace Sarvangasana as a pathway to inner harmony and vitality, allowing its empowering energy to uplift your spirit and awaken your highest potential.",
  },
  {
    img: '../assets/images/standing_forward_fold.png',
    title: 'Standing Forward Fold',
    content: "Standing Forward Fold, or Uttanasana, is a rejuvenating yoga pose that offers a multitude of physical and mental benefits. Begin by standing tall with your feet hip-width apart and your arms alongside your body. Inhale deeply as you lengthen your spine, then exhale slowly as you hinge at the hips, folding forward from the waist. Allow your head and neck to relax, and let your arms hang down toward the floor or grasp your elbows with opposite hands. Bend your knees slightly if necessary to release tension in the hamstrings. With each breath, surrender deeper into the pose, feeling a gentle stretch along the spine, hamstrings, and calves. Uttanasana symbolizes surrender, letting go of tension and stress to find inner peace and tranquility. As you surrender to the pose, you cultivate mindfulness and presence, connecting deeply with your breath and the present moment. Standing Forward Fold also improves circulation, calms the mind, and relieves stress and anxiety. Embrace Uttanasana as a sanctuary for relaxation and renewal, allowing its nurturing energy to soothe your body, mind, and soul.",
  },
  {
    img: '../assets/images/four-limbed_staff.png',
    title: 'Four-limbed Staff',
    content: "Four-Limbed Staff Pose, or Chaturanga Dandasana, is a challenging yet invigorating yoga pose that requires strength, stability, and mindfulness. Begin in Plank Pose, with your hands shoulder-width apart and your body forming a straight line from head to heels. On an exhale, lower your body halfway down, keeping your elbows hugged close to your ribs and your core engaged. Your elbows should create a 90-degree angle, with your upper arms parallel to the floor. Hold this position, hovering just above the ground, with your gaze forward and your neck in line with your spine. Feel the strength and stability of your entire body as you maintain the pose, drawing energy from your core and pressing firmly into the ground with your hands and toes. Four-Limbed Staff Pose represents resilience and inner strength, challenging you to find balance and stability in both body and mind. As you hold the pose, focus on your breath, cultivating a sense of calm and presence amidst the physical intensity. Chaturanga Dandasana strengthens the arms, shoulders, core, and wrists while also toning the abdominal muscles and improving overall body awareness. Embrace the power of Four-Limbed Staff Pose as a reminder of your inner strength and resilience, allowing it to empower and inspire you both on and off the yoga mat.",
  },
  {
    img: '../assets/images/mighty.png',
    title: 'Mighty',
    content: "Mighty Pose, also known as Virabhadrasana II or Warrior II Pose, is a foundational yoga pose that embodies strength, courage, and focused determination. Begin by standing tall at the top of your mat, then step your feet wide apart, about the length of your leg. Turn your right foot out 90 degrees and your left foot slightly inward. Extend your arms parallel to the floor, with your palms facing down, reaching actively through your fingertips. Bend your right knee, ensuring it aligns directly over your ankle, while keeping your left leg straight and strong. Ground down through the outer edge of your left foot as you engage your thighs and lift through your pelvic floor. Gaze over your right fingertips, feeling the power and vitality coursing through your body. Mighty Pose symbolizes the warrior spirit within, inviting you to stand firm in your truth and face life's challenges with grace and determination. As you hold the pose, breathe deeply and evenly, cultivating a sense of inner calm and resilience. Embrace the strength and confidence of Warrior II, allowing it to empower you both physically and mentally as you navigate your journey on and off the mat.",
  },
];

/* Code from: https://mui.com/material-ui/react-masonry/ and https://mui.com/material-ui/react-grid/ , with some changes made by me*/
