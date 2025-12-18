import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessType, service, message } = body;

    // Mapeo de tipos de negocio y servicios para el correo
    const businessTypeLabels: Record<string, string> = {
      park: 'Parque de aventura',
      hotel: 'Hotel / Hospedaje',
      restaurant: 'Restaurante',
      tour: 'Tour operador',
      store: 'Tienda / Comercio',
      professional: 'Servicios profesionales',
      realestate: 'Bienes raíces',
      other: 'Otro',
    };

    const serviceLabels: Record<string, string> = {
      photography: 'Fotografía para parques',
      web: 'Página web',
      social: 'Gestión de redes sociales',
      content: 'Producción de contenido',
      marketing: 'Marketing digital completo',
      all: 'Todos los servicios',
    };

    const businessTypeText = businessTypeLabels[businessType] || businessType || 'No especificado';
    const serviceText = serviceLabels[service] || service || 'No especificado';

    // 1. Correo a gerencia con CC a gmail
    await resend.emails.send({
      from: 'Orostudioscr <gerencia@orostudioscr.com>',
      to: 'gerencia@orostudioscr.com',
      cc: 'orostudioscr@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto: ${name} - ${serviceText}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">Nuevo Mensaje de Contacto</h1>
          </div>
          
          <div style="background: #18181b; padding: 30px; color: #e4e4e7;">
            <h2 style="color: #f97316; border-bottom: 2px solid #f97316; padding-bottom: 10px;">Información del Cliente</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #a1a1aa; width: 140px;">Nombre:</td>
                <td style="padding: 10px 0; color: white; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a1a1aa;">Email:</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #f97316;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a1a1aa;">Teléfono:</td>
                <td style="padding: 10px 0; color: white;">${phone || 'No proporcionado'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a1a1aa;">Tipo de Negocio:</td>
                <td style="padding: 10px 0; color: white;">${businessTypeText}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #a1a1aa;">Servicio:</td>
                <td style="padding: 10px 0; color: #f97316; font-weight: bold;">${serviceText}</td>
              </tr>
            </table>
            
            <h3 style="color: #f97316; margin-top: 30px;">Mensaje:</h3>
            <div style="background: #27272a; padding: 20px; border-radius: 8px; border-left: 4px solid #f97316;">
              <p style="color: #e4e4e7; margin: 0; line-height: 1.6;">${message || 'Sin mensaje adicional'}</p>
            </div>
          </div>
          
          <div style="background: #0a0a0a; padding: 20px; text-align: center;">
            <p style="color: #71717a; margin: 0; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de orostudioscr.com
            </p>
          </div>
        </div>
      `,
    });

    // 2. Correo de confirmación al cliente
    await resend.emails.send({
      from: 'Orostudioscr <gerencia@orostudioscr.com>',
      to: email,
      subject: '¡Recibimos tu mensaje! - Orostudioscr',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0;">¡Gracias por contactarnos!</h1>
          </div>
          
          <div style="background: #18181b; padding: 30px; color: #e4e4e7;">
            <p style="font-size: 18px; color: white;">Hola <strong>${name}</strong>,</p>
            
            <p style="line-height: 1.8; color: #a1a1aa;">
              Hemos recibido tu mensaje y nos pondremos en contacto contigo en menos de <strong style="color: #f97316;">24 horas</strong>.
            </p>
            
            <div style="background: #27272a; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #a1a1aa; margin: 0 0 10px 0;">Servicio de interés:</p>
              <p style="color: #f97316; font-size: 18px; font-weight: bold; margin: 0;">${serviceText}</p>
            </div>
            
            <p style="line-height: 1.8; color: #a1a1aa;">
              Mientras tanto, si tenés alguna pregunta urgente, podés contactarnos directamente:
            </p>
            
            <div style="margin: 20px 0;">
              <p style="margin: 8px 0;"><span style="color: #a1a1aa;">📞 WhatsApp:</span> <a href="https://wa.me/50660982244" style="color: #f97316; text-decoration: none;">+506 6098-2244</a></p>
              <p style="margin: 8px 0;"><span style="color: #a1a1aa;">📧 Email:</span> <a href="mailto:gerencia@orostudioscr.com" style="color: #f97316; text-decoration: none;">gerencia@orostudioscr.com</a></p>
            </div>
            
            <p style="color: #a1a1aa;">¡Gracias por tu interés en Orostudioscr!</p>
          </div>
          
          <div style="background: #0a0a0a; padding: 20px; text-align: center;">
            <p style="color: #f97316; font-weight: bold; margin: 0 0 10px 0;">Orostudioscr</p>
            <p style="color: #71717a; margin: 0; font-size: 12px;">
              Fotografía profesional para parques de aventura | Agencia digital
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}